
<template>
  <section>
    <div>
      <div class="col-sm-12 text-center">
        <div>
          <h3>
            {{
              this.error.statusCode === 404
                ? "Xin lỗi, trang bạn đang tìm kiếm không tồn tại!"
                : "Có lỗi xảy ra, vui lòng thử lại"
            }}
          </h3>
        </div>
        <div id="t" class="offline">
          <div id="messageBox" class="sendmessage">
            <div class="niokbutton" onclick="okbuttonsend()"></div>
          </div>
          <div class="game-content">
            <div id="main-frame-error" class="interstitial-wrapper">
              <div id="main-content">
                <div class="icon icon-offline" alt=""></div>
              </div>
              <div id="offline-resources">
                <img
                  id="offline-resources-1x"
                  src="/images/default_100_percent/100-offline-sprite.png"
                />
                <img
                  id="offline-resources-2x"
                  src="/images/default_200_percent/200-offline-sprite.png"
                />
              </div>
            </div>
          </div>
          <script type="text/javascript" src="js/game.js"></script>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["error"],
  mounted() {
    this.postTracking();
  },
  methods: {
    ...mapActions({
      postbyUrl: "common/postbyUrl",
    })
  },
};
</script>
<!-- <style lang="scss" scoped>
@import "~/static/css/style.scss";
</style> -->

