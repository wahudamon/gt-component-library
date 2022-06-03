<template>
  <div :class="classes">
    <select id="defaultCombobox">
      <option>{{ placeholder }}</option>
      <option v-for="(item, i) in items" :key="i">{{ item }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "DefaultCombobox",

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
    this.initCombobox();
  },

  methods: {
    initCombobox() {
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
        selElmnt = document.getElementById("defaultCombobox");
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

        for (j = 1; j < ll; j++) {
          c = document.createElement("DIV");
          c.innerHTML = selElmnt.options[j].innerHTML;
          c.addEventListener("click", function (e) {
            let y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
              if (s.options[i].innerHTML == this.innerHTML) {
                s.selectedIndex = i;
                h.innerHTML = this.innerHTML;
                y = this.parentNode.getElementsByClassName("same-as-selected");
                yl = y.length;
                for (k = 0; k < yl; k++) {
                  y[k].removeAttribute("class");
                }
                this.setAttribute("class", "same-as-selected");
                this.selectedItem = this.innerText;
                break;
              }
            }
            h.click();
          });
          b.appendChild(c);
        }

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
