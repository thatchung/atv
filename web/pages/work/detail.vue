<template>
  <div class="container">
    <h2 class="section-title">Work</h2>
    <div class="line-all"></div>
    <div class="work-back-content" @click="$router.back()">
      <b-icon-arrow-left /> Back
    </div>
    <div class="work-date-content">
      {{ work.create_date }}
    </div>
    <h1 class="work-title font-pp-bold">{{ work.title }}</h1>
    <div class="work-info">
      <div class="work-info">
        <div class="detail-text">
          Year: {{ work.year }}
        </div>
        /
        <div class="detail-text">
          Year: {{ work.area }}m2
        </div>
      </div>
      <div class="work-info">
        <div class="detail-text">
          Type of project: {{ work.type_category }}
        </div>
      </div>
      <div class="work-info">
        <div class="detail-text">
          Location: {{ work.location }}
        </div>
      </div>
      <div class="work-info">
        <div class="detail-text">
          Scope of work : Construction
        </div>
      </div>
    </div>
    <div class="work-content">
      <div class="white-space-word text-justify text-content" v-html="work.content">
      </div>
      <div class="back-top" @click="toTopAction"><b-icon-arrow-up /></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
export default {
  name: 'IndexPage',
  computed: {
    ...mapGetters({
      listWork: "work/getListWork"
    }),
  },
  data() {
    return {
      work:{
        title: 'Harley Davidson Da Nang',
        url: '/images/slide4.jpg',
        thub: '/images/slide4.jpg',
        type_category: 'Office',
        location: 'Da Nang',
        create_date: 'December 27, 2021',
        area: 600,
        year: 2021,
        content: '<figure class="image"><img src="https://statics.sinhvienplus.vn/image/2022/03/31/9ad8066ca4a04e5ebac2ff2b16b8347a.jpg" srcset="https://statics.sinhvienplus.vn/image/2022/03/31/d42b33dd1ee0405c897f57316be589b9.jpg 800w" sizes="100vw" width="800"></figure><p>Thứ trưởng Bộ Y tế Đỗ Xuân Tuyên vừa có văn bản ký gửi Bộ Thông tin và Truyền thông; Bộ trưởng Bộ Công Thương; Bộ Văn hóa, Thể thao và Du lịch; Bộ Kế hoạch và Đầu tư; Cảnh sát viên; Ủy ban nhân dân tỉnh/thành phố tăng cường phối hợp quản lý các biện pháp khuyến khích quảng cáo sử dụng thực phẩm để bảo vệ sức khỏe. &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p><p>Theo Bộ Y tế, Cục An toàn thực phẩm (Bộ Y tế) đã phê duyệt toàn bộ quy trình đăng ký nội dung quảng cáo thực phẩm bảo vệ sức khỏe, nhằm tạo thuận lợi cho tổ chức, cá nhân thực hiện thủ tục hành chính trên môi trường mạng (Dịch vụ công trực tuyến mức độ 4). &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p><p>Ngoài những tổ chức, cá nhân chấp hành tốt các quy định của luật quảng cáo thực phẩm tốt cho sức khỏe, vẫn còn nhiều tổ chức, cá nhân vi phạm các quy định về quảng cáo, chủ yếu là quảng cáo tập trung vào các hành vi như quảng cáo mà không chú trọng đến sự thật, bản chất của sản phẩm, quảng cáo không có nội dung qua thẩm định của cơ quan chuyên môn và quảng cáo không đúng với nội dung được thẩm định. &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p><p><img src="https://statics.sinhvienplus.vn/image/2022/03/31/8a6ac6b608ca425597d3e33b737e1de2.jpg" srcset="https://statics.sinhvienplus.vn/image/2022/03/31/0bb46c2987e243189633298a03ff8000.jpg 800w" sizes="100vw" width="800">Với tư cách là cơ quan thường trực Ban chỉ đạo liên ngành về an toàn thực phẩm Trung ương, Bộ Y tế đề nghị Bộ Thông tin và Truyền thông xử lý nghiêm các tổ chức, cá nhân đăng quảng cáo sai sự thật, đăng quảng cáo chưa được cơ quan chuyên môn thẩm định, không phù hợp với những nội dung đã thẩm định.</p><p>Thực hiện các biện pháp mạnh mẽ đối với các mạng xã hội như Facebook, TikTok, Twitter, v.v., các nền tảng quảng cáo trên Google Ads như YouTube, CocCoc, Chrome, v.v. và tuân thủ nghiêm ngặt các quy định của pháp luật Việt Nam về Luật Quảng cáo. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p><p>Rà soát, quản lý chặt chẽ các điều kiện mở website, khai thác tên miền để đảm bảo nếu phát hiện vi phạm về quảng cáo thì phải đóng cửa tên miền ngay lập tức hoặc phải đóng cửa vĩnh viễn tên miền có liên quan.&nbsp;</p><p><img src="https://statics.sinhvienplus.vn/image/2022/03/31/dfdfb0fcd0a44dd3b656c9ec9b1673b6.jpg" srcset="https://statics.sinhvienplus.vn/image/2022/03/31/5967521f5d3a4d7b9992c3eff377ab93.jpg 800w" sizes="100vw" width="800">Đồng thời, tăng cường công tác quản lý hoạt động quảng cáo xuyên biên giới. Bộ Công Thương đang đẩy mạnh thanh tra, kiểm tra việc thực hiện các quảng cáo thực phẩm dành cho sức khỏe tại các sàn thương mại điện tử, doanh nghiệp bán hàng đa cấp có kinh doanh thực phẩm.</p><p>Các biện pháp được đưa ra để giám sát các hoạt động ở nhiều cấp độ, nhất là các cuộc hội thảo phát triển thành viên công ty, để tránh việc truyền tai nhau sai sự thật. Có các biện pháp và chế tài quản lý chặt chẽ không gian thương mại điện tử. &nbsp;</p><p>Bộ Văn hóa Thể thao và Du lịch, Bộ Y tế đề nghị phổ biến các quy định của Luật quảng cáo, quản lý chặt chẽ các tổ chức, cá nhân, đặc biệt là các văn nghệ sĩ tham gia quảng cáo thực phẩm lành mạnh có tác dụng như thuốc chữa bệnh, phóng đại công dụng, thông tin chưa được kiểm chứng, thông tin quảng cáo chưa qua thẩm định bởi các cơ quan chuyên môn có ảnh hưởng đến sức khỏe và tài sản của người tiêu dùng. &nbsp; &nbsp; &nbsp; &nbsp;</p><figure class="image"><img src="https://statics.sinhvienplus.vn/image/2022/03/31/b2e3c0056cc7488c8b4e65b5f31715c2.jpg" srcset="https://statics.sinhvienplus.vn/image/2022/03/31/b471747d498a44a59458d3866bfe029e.jpg 800w" sizes="100vw" width="800"></figure><p>Bộ Y tế kiến Bộ Công an chủ trì kiểm tra, quản lý chặt chẽ để làm gương cho các chủ sở hữu tên miền quảng cáo trên các trang mạng xã hội vi phạm luật quảng cáo.&nbsp;</p><p>Chủ trì, phối hợp với các cơ quan của bộ y tế, Bộ Công Thương, Bộ Thông tin và Truyền thông, Ủy ban nhân dân tỉnh, thành phố trực thuộc Trung ương điều tra, xử lý đối với tổ chức, cá nhân quảng cáo gây hiểu lầm cho người tiêu dùng. Bộ Kế hoạch và Đầu tư quản lý chặt chẽ hơn việc cấp giấy chứng nhận đăng ký doanh nghiệp.</p><p>Trong văn bản này, Bộ Y tế kêu gọi Ủy ban nhân dân các tỉnh, thành phố liên hệ với chính quyền địa phương (Sở Thông tin và Truyền thông; Sở Y tế; Sở Công thương; Sở Văn hóa, Thể thao và Du lịch: Thanh tra các tỉnh, thành phố trực thuộc Trung ương) tăng cường công tác thanh tra, kiểm tra và xử lý vi phạm về quảng cáo thực phẩm bảo vệ sức khỏe trên địa bàn.&nbsp;</p><figure class="image"><img src="https://statics.sinhvienplus.vn/image/2022/03/31/059dba66adda46d386c5614068f01c1c.jpg" srcset="https://statics.sinhvienplus.vn/image/2022/03/31/363276b782b0421bb847e14f7d24733a.jpg 800w, https://statics.sinhvienplus.vn/image/2022/03/31/ec206d40c84a469da61405a52a5aa92d.jpg 1024w" sizes="100vw" width="1024"></figure><p>Tuyên truyền đến mọi người không tham gia vào các clip, video quảng cáo sai tác dụng, lạm dụng thực phẩm sức khỏe làm thuốc chữa bệnh. Bộ Y tế cũng kêu gọi các cơ quan chủ quản của các công ty cung cấp dịch vụ phân phối quảng cáo định kỳ rà soát, thu hồi và truy tố quyết liệt các hành vi vi phạm Đạo luật quảng cáo thực phẩm tăng cường sức khỏe của các công ty cung cấp dịch vụ thực phẩm tăng cường sức khỏe.&nbsp;</p><p>Tuyên truyền, khuyến khích người dân chỉ mua thực phẩm bảo vệ sức khỏe khi có nhu cầu, không qua các con đường truyền miệng khác. Khi mua thực phẩm bảo vệ sức khỏe phải có nguồn gốc xuất xứ rõ ràng, có hóa đơn chứng từ để có lý do, kiểm nghiệm để cơ quan chức năng xử lý theo yêu cầu.</p>'
      }
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    ...mapActions({
      getListWork: "work/getListWork"
    }),
    async loadData() {
      await this.getListWork()
    },
    toTopAction () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>
<style lang="scss">
.section-title{
  font-size: 4rem;
  margin-top: 2rem;
}
.work-back-content{
  display: inline-block;
  float: left;
  margin-top: 0rem;
  cursor: pointer;
}
.work-date-content{
  display: inline-block;
  float: right;
  margin-top: 0rem;
}
.work-title{
  font-size: 2rem;
  margin-top: 4rem;
}
.work-content{
  position: relative;
  padding-bottom: 4rem;
  margin-top: 2rem;
}
.work-content img{
  width: 100% !important;
}
.back-top{
  position: absolute;
  bottom: 1rem;
  right: 0rem;
  cursor: pointer;
}
.detail-text{
  display: inline-block;
}
</style>