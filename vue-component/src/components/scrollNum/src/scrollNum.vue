<template>
  <div>
    <div class="soll-num" ref="numberGrow"></div>
    <img :src="numbers[0]" alt srcset />
  </div>
</template>

<script>
export default {
  name: "FyScrollNum",
  props: {
    time: {
      type: Number,
      default: 3
    },
    value: {
      type: Number,
      default: 1234567890
    }
  },
  data() {
    return {
      msg: "1234567890",
      numbers: [
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAtCAYAAAC0wKvmAAAAzUlEQVRYR+1XwQ3DIAz0kcFKN0lfpFM0W0R5td0kk3EVVKoqEslCCe3H+fDI4YM7y8aQxh8ax5cVwUT2jnKvJSblMXS4lPsOIxDKM3ToVYLak2v4fIMkC6Kctq6oBSj/l7EywRzJtAaH3aaXsYxgZZFJpGatSWQStatFS4SMV2BRRVYAE+kdZQwOPkF3V0/tQEagKfT2YI481GRQboPD+WOytcxvI6xcq2lpEplE7Tpa2+d7nsui+K0RSHW1AJSxft/RbMr8zxhbmyk1+Beoghg9aglGlgAAAABJRU5ErkJggg==",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAtCAYAAAC0wKvmAAAAk0lEQVRYR+2XsQ3EMAwDRWWwdzZxKmeLzxZBlrUCp/wv2FhNQNeCCB8JGoYlHyTvNwlQwtMRnREV3T77gm2oTxe4esRY3BzPbgn8mSxENPdCJESUAB1IT9EZUTzsaI6SUna/V5zephKgKRomI+y7O9YUk9NjKgFqshAJESVAB5Qiimh8QLxbaQtqSpvqRaMevA/RDYFHfC41thwMAAAAAElFTkSuQmCC",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAtCAYAAAC0wKvmAAAAwElEQVRYR+2XQQ7CMAwE7fRh5CnlFPhFf1H1BPykL/OiRuLSViyWEk7OeeNNxqtYUem8tHN9ORjMwJggD68xIM/boNf9vmYGAnmVQUdq4D050zfvwYZYTS4fXM0NFgO2W5WktXYYHHociFjsJRAFIkqACrqnaAZygkwlae7y2NGBEyPzFNFiWE1luquuNCZOQZ1o+2g5a3yVhwGlGYgCESVABZGi3xDVIWOSz75AtAIRNP8fxMh0t+T/PXAfkWx4A+Fbqi5LaAzEAAAAAElFTkSuQmCC",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAtCAYAAAC0wKvmAAAAtElEQVRYR+2XMQ7DIBRD/cnBSm+STOQW7S2iTmkviiMiZWkGC4m//cwOhmeLLwzOnzmvj5vBRs6J2HuNSXzXyZb//4YZgPiVyWZp0LtzpR+eQUNsFY8L13CDTyXbqUqyc+0wuGUciFTtEYgCkSQgBe4t2siciHdJll0uOzlwYmRKRLImQtBCNuK1Jnu6hOxe0zCQHQhEgUgSkIJokUR0DqyKfD2nhr8P5DyIkSkRyRQ7Be4hH43NqS6ooHATAAAAAElFTkSuQmCC",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAtCAYAAAC0wKvmAAAAxElEQVRYR+2VUQ6CMBBEd8rBrDfBL/AUcgvil3oTTtYxkJiYQjIxtSaY5YcPdnfK22YGVvlB5fnmApLwgmgkWyQ79A1OskMU5LMWgWsi53cXULyTfJYLrDbiiOQtdkSOqJ4XTQk2nIFJQtZuGgNt6ALiXFrsnupAK4HZzwPtphrz76Tdt/LkawJGe3QN2lz494g+RZPXj2QE7dIHHKssedPsSk/93u8CkqYjckSSgCzwWyQRLYGVLL6yYX95sP9E+78/eAJBiMoulzKLjwAAAABJRU5ErkJggg==",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAtCAYAAAC0wKvmAAAAxUlEQVRYR+1XwQ3DIBA7k8GabpK+kk7RbhH11XaTTIYrqPIJVS0k+B2fPDA42MdZwDoPdN7fCoKVnALtWUtM2msZcDmua0ZgtPc8YJIEtX+u8PkESRZEO/06otpAzWeCRyTTdw5obroTKAu+98A9+KeTS+RVJBWQgL2Ktgi7X4FNrqgENO+eMnA8MqVElR4W8JUcQbstAec02dzkY+t3gsIDl0hWsUvkEkkFJKB7FeXAijbuz6nmzU7mgUemlEiWSSWgu8kfxnGqLoe7cY4AAAAASUVORK5CYII=",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAtCAYAAAC0wKvmAAAAzUlEQVRYR+1XQQ7CIBDcoQ+z/qSeWl+hv2h60v6kL2MMGGNCiRsipJfl0gPDTplZdgHSeKBxfNkRzOTgKI9SYlKeU4dLuq4agVDWscOgEpT+uYaPOwiywMspt0UtgDYfCRZPhu/oUN10I9AseJ8D8+CXTiaRZZGqgAr4ZNHmIfcrsKkrCgHVq6facKxlZiVaPKuZPJM9KLfJ4RzIqteitPQbwe7YmURqJTKJTKL/r+/ZLIpNxkufewKpoieANJa1zK9Ah74yS40swTc3+QXT7uku4owavAAAAABJRU5ErkJggg==",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAtCAYAAAC0wKvmAAAArklEQVRYR+1XQQrDMAyT3Yct+0l7Sn+x/aLs1O2jUUmhl/ZgCjEj4JwVK5YcGwucjzjHx4VgIUcl1rvEJL7zINP5XjMCEL88yGgS3H25hW/uQZVYCh6HXM0JPoWsWWWVPXYQXDwOiayyR0gUEpkKmAD3KlrIpMQ7qySXZtf/wOk/g2qyEK9Z5elisnuZBsH/W0V4EB6YCpiA/qto3/EK0rFONd8P+h84kYH5D86ADd4Yiy7oOpBtAAAAAElFTkSuQmCC",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAtCAYAAAC0wKvmAAAA0klEQVRYR+1XSQ6DMAz0hIeV/oSeQl9RfoE40f6El2WqcGirgGRFJGpVmQsHHE88Y7xAKj+o7F82ACPZOcqcC0zKvW9wSc8VAxDKwzfoVIDcm2v2awSRFgQ57YWoOUi/p75WgCmQ8e0dDoue+jKAjURGkZq1RpFRVK8WLQEyXIFFJVkxGMnWUQbv0EbTw9VTu1CxjvbnLXMKLCoyKLfe4fwS2VrmZ6paudZ+3M2MZXORzUVq0vwIReteFqTdW4FyY0h9Wct8M/jVLTNXyBz76iI/AQIOJz1eJiYRAAAAAElFTkSuQmCC",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAtCAYAAAC0wKvmAAAA1ElEQVRYR+1XwQ3DIAy0yWClm6Qv0imaLaK82m6SybgKpH5IpBMKPFo5nzy4+MydMbFK50c7x5cdwQKMDvKsJQbkNQ16K79rRiCQdxh0pAS1mTN83kGSRaNcjrbIApTrZaxMsEYgvYPT06aXsYxgZ5FJRKvWJDKJ+vWiLarMd9WNikwAC+AdZA5OfYKe7p4soWY32p9fmUzHmvVkskIek9NrF5MPm11NhgxrBEyh3S9Q85NsHpgHVAEK+P0qyjNeFP8dp5ofNDqj2ZRJJaJ1WAnobvIH9ILoLo66uyAAAAAASUVORK5CYII="
      ]
    };
  },
  methods: {
    numberGrow(ele) {
      let _this = this;
      let step = (_this.value * 10) / (_this.time * 1000);
      let current = 0;
      let start = 0;
      let t = setInterval(function() {
        start += step;
        if (start > _this.value) {
          clearInterval(t);
          start = _this.value;
          t = null;
        }
        if (current === start) {
          return;
        }
        current = start;
        ele.innerHTML = current
          .toString()
          .replace(/(\d)(?=(?:\d{3}[+]?)+$)/g, "$1,");
      }, 10);
    }
  },
  mounted() {
    this.numberGrow(this.$refs.numberGrow);
  }
};
</script>

<style lang="scss" scope>
@function px2Rem($px, $base-font-size: 19.2px) {
  @if (unitless($px)) { //有无单位
    @return ($px / 19.2) * 1rem;
  } @else if (unit($px) == em) {
    @return $px;
  }
  @return ($px / $base-font-size) * 1rem;
}
@font-face {
  font-family: display;
  src: url("../../../assets/font/display.ttf");
}
.soll-num {
  font-family: "display";
  font-size: px2Rem(30px);
  padding: px2Rem(10px);
  background-image: -webkit-linear-gradient(bottom, red, #fd8403, yellow);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
