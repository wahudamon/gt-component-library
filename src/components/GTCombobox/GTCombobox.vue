<template>
  <div class="custom-select">
    <select>
      <option value="select">Placeholder</option>
      <option value="lamborghini">Lamborghini</option>
      <option value="ferrari">Ferrari</option>
      <option value="mitsubishi">Mitsubishi</option>
      <option value="toyota">Toyota</option>
      <option value="suzuki">Suzuki</option>
      <option value="supra">Supra</option>
      <option value="chevrolet">Chevrolet</option>
      <option value="pulsar">Pulsar</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "GTCombobox",

  props: {
    size: {
      type: String,
      default: "md",
      validator: function (value) {
        return ["sm", "md"].indexOf(value) !== -1;
      },
    },
  },

  data() {
    return {
      selectedItem: "",
    }
  },

  computed: {
    classes() {
      return {
        "gt-combobox": true,
        "form-select": true,
        "form-select-sm": this.size && this.size === "sm",
      };
    },
  },

  mounted() {
    this.initComboboxElement();
  },

  methods: {
    initComboboxElement() {
      var x, i, j, l, ll, selElmnt, a, b, c;

      function closeAllSelect(elmnt) {
        var x, y, i, xl, yl, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        xl = x.length;
        yl = y.length;
        for (i = 0; i < yl; i++) {
          if (elmnt == y[i]) {
            arrNo.push(i)
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

      x = document.getElementsByClassName("custom-select");
      l = x.length;

      for (i = 0; i < l; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        ll = selElmnt.length;
        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        a.setAttribute("id", "selected");
        a.addEventListener("click", () => {
          this.selectedItem = a.innerText
        });
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");
        for (j = 1; j < ll; j++) {
          c = document.createElement("DIV");
          c.innerHTML = selElmnt.options[j].innerHTML;
          c.addEventListener("click", function(e) {
              var y, i, k, s, h, sl, yl;
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
        a.addEventListener("click", function(e) {
          e.stopPropagation();
          closeAllSelect(this);
          this.nextSibling.classList.toggle("select-hide");
          this.classList.toggle("select-arrow-active");
        });

        document.addEventListener("click", closeAllSelect);
      }
    },
  }
};
</script>

<style lang="scss">
@import "./GTCombobox.scss";
</style>
