<template>
  <div :class="classes">
    <select id="emptyCombobox">
      <option v-if="placeholder">{{ placeholder }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "EmptyCombobox",

  props: {
    size: {
      type: String,
      default: "md",
      validator: function (value) {
        return ["sm", "md"].indexOf(value) !== -1;
      },
    },
    items: {
      type: Array,
      default: () => {
        return [];
      },
    },
    placeholder: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      selectedItem: "",
    };
  },

  computed: {
    classes() {
      return {
        "gt-combobox": true,
        "gt-combobox__small": this.size && this.size === "sm",
      };
    },
  },

  mounted() {
    this.initEmptyCombobox();
  },

  methods: {
    initEmptyCombobox() {
      let x, i, j, l, ll, selElmnt, a, b, c;

      function closeAllSelect(elmnt) {
        let x,
          y,
          i,
          xl,
          yl,
          arrNo = [];
        x = document.getElementsByClassName("gt-combobox__items");
        y = document.getElementsByClassName("gt-combobox__selected");
        xl = x.length;
        yl = y.length;
        for (i = 0; i < yl; i++) {
          if (elmnt == y[i]) {
            arrNo.push(i);
          } else {
            y[i].classList.remove("select-arrow-active");
          }
        }
        for (i = 0; i < xl; i++) {
          if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
          }
        }
      }

      x = document.getElementsByClassName("gt-combobox");
      l = x.length;

      for (i = 0; i < l; i++) {
        selElmnt = document.getElementById("emptyCombobox");
        ll = selElmnt.length;
        a = document.createElement("DIV");
        a.setAttribute("class", "gt-combobox__selected");
        a.addEventListener("click", () => {
          this.selectedItem = a.innerText;
        });
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);
        b = document.createElement("DIV");
        b.setAttribute("class", "gt-combobox__items select-hide");

        let selectEmptyText = document.createElement("p");
        selectEmptyText.innerText = "Tidak ada data.";
        c = document.createElement("DIV");
        c.setAttribute("class", "select-empty text-center");
        c.appendChild(selectEmptyText);
        b.appendChild(c);
        x[i].appendChild(b);
        a.addEventListener("click", function (e) {
          e.stopPropagation();
          closeAllSelect(this);
          this.nextSibling.classList.toggle("select-hide");
          this.classList.toggle("select-arrow-active");
        });

        document.addEventListener("click", closeAllSelect);
      }
    },
  },
};
</script>

<style lang="scss">
@import "./GTCombobox.scss";
</style>
