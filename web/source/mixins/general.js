import moment from "moment"
var tvkd = require('tieng-viet-khong-dau');

export default {
    data() {
        return {
        }
    },
    filters: {
        dateFilter(date) {
            return moment(date).format("DD/MM/YYYY") // HH:mm:ss
        },
        dateTimeFilter(date) {
            return moment(date).format("HH:mm:ss DD/MM/YYYY") // HH:mm:ss
        },
        timeFilter(date) {
            return moment(date).format("HH:mm") // HH:mm:ss
        },
        dateTimeFilterText(date) {
            return `${moment(date).format("DD/MM/YYYY")} lúc ${moment(date).format("HH:mm")}` // HH:mm:ss
        },
        dateTimeFilterTextPost(date) {
            return `${moment(date).format("HH:mm")} ngày ${moment(date).format("DD/MM/YYYY")}` // HH:mm:ss
        },
        numberWithCommas(x) {
            return x ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") : x
        },
        numberFormat(x) {
            return x ? parseFloat(Math.round(x * 100) / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ".") : x
        },
        formatPhoneNumber(phoneNumberString) {
          var cleaned = ('' + phoneNumberString).replace(/\D/g, '').replace('0', '')
          var match = cleaned.match(/^(\d{3})(\d{3})(\d{3})$/)
          if (match) {
            return '+84 ' + match[1] + ' ' + match[2] + ' ' + match[3]
          }
          return null
        },
        workTypeFilter(state) {
            let stringState = state
            switch (state) {
                case 'featured':
                    stringState = 'Featured'
                    break
                case 'category':
                    stringState = 'By Category'
                    break
                case 'year':
                    stringState = 'By Year'
                    break
                case 'location':
                    stringState = 'By Location'
                    break
                case 'all':
                    stringState = 'All'
                    break
                default:
                    break
            }
            return stringState
        },
        workTypeVNFilter(state) {
            let stringState = state
            switch (state) {
                case 'featured':
                    stringState = 'Nổi bật'
                    break
                case 'category':
                    stringState = 'Theo Chuyên Mục'
                    break
                case 'year':
                    stringState = 'Theo Năm'
                    break
                case 'location':
                    stringState = 'Theo Vị Trí'
                    break
                case 'all':
                    stringState = 'Tất Cả'
                    break
                default:
                    break
            }
            return stringState
        },
        locationFilter(state) {
            if(state === 'Phnôm Pênh_Campuchia') {
                return 'Phnompenh_Cambodia'
            } else {
                let stringState = tvkd.c(state)
                return stringState
            }
            // switch (state) {
            //     case 'HOCHIMINH':
            //         stringState = 'HO CHI MINH'
            //         break
            //     case 'HANOI':
            //         stringState = 'HA NOI'
            //         break
            //     case 'HAIPHONG':
            //         stringState = 'HAI PHONG'
            //         break
            //     case 'HALONG':
            //         stringState = 'HA LONG'
            //         break
            //     case 'DANANG':
            //         stringState = 'DA NANG'
            //         break
            //     case 'BINHDUONG':
            //         stringState = 'BINH DUONG'
            //         break
            //     case 'NHATRANG':
            //         stringState = 'NHA TRANG'
            //         break
            //     case 'BENTRE':
            //         stringState = 'BEN TRE'
            //         break
            //     case 'MYTHO':
            //         stringState = 'MY THO'
            //         break
            //     case 'PHNOMPENH_CAMBODIA':
            //         stringState = 'PHNOMPENH (CAMBODIA)'
            //         break
            //     default:
            //         break
            // }
        },
        locationVNFilter(state) {
            let stringState = state
            switch (state) {
                case 'HOCHIMINH':
                    stringState = 'HỒ CHÍ MINH'
                    break
                case 'HANOI':
                    stringState = 'HÀ NỘI'
                    break
                case 'HAIPHONG':
                    stringState = 'HẢI PHÒNG'
                    break
                case 'HALONG':
                    stringState = 'HẠ LONG'
                    break
                case 'DANANG':
                    stringState = 'ĐÀ NẴNG'
                    break
                case 'BINHDUONG':
                    stringState = 'BÌNH DƯƠNG'
                    break
                case 'NHATRANG':
                    stringState = 'NHA TRANG'
                    break
                case 'BENTRE':
                    stringState = 'BẾN TRE'
                    break
                case 'MYTHO':
                    stringState = 'MỸ THO'
                    break
                case 'PHNOMPENH_CAMBODIA':
                    stringState = 'PHNOMPENH (CAMBODIA)'
                    break
                default:
                    break
            }
            return stringState
        },
        categoryFilter(state) {
            let stringState = state
            switch (state) {
                case 'office':
                    stringState = 'Office'
                    break
                case 'office_showroom':
                    stringState = 'Office / Showroom'
                    break
                case 'mall':
                    stringState = 'Shopping Mall'
                    break
                case 'hospital':
                    stringState = 'Hospitality'
                    break
                case 'hotel':
                    stringState = 'Hotel'
                    break
                case 'cinema':
                    stringState = 'Cinema'
                    break
                case 'epg':
                    stringState = 'Entertainment Play Ground'
                    break
                case 'lounge':
                    stringState = 'Lounge'
                    break
                case 'complex':
                    stringState = 'Complex city'
                    break
                case 'retail':
                    stringState = 'Retail'
                    break
                case 'retail_showroom':
                    stringState = 'Retail / Showroom'
                    break
                case 'apartment':
                    stringState = 'Apartment'
                    break
                case 'residential':
                    stringState = 'Residential'
                    break
                case 'store':
                    stringState = 'Flagship Store'
                    break
                default:
                    break
            }
            return stringState
        },
        categoryVNFilter(state) {
            let stringState = state
            switch (state) {
                case 'office':
                    stringState = 'Văn phòng'
                    break
                case 'office_showroom':
                    stringState = 'Văn phòng / Showroom'
                    break
                case 'mall':
                    stringState = 'Trung tâm thương mại'
                    break
                case 'hospital':
                    stringState = 'Hospitality'
                    break
                case 'hotel':
                    stringState = 'Khách sạn'
                    break
                case 'cinema':
                    stringState = 'Rạp chiếu phim'
                    break
                case 'epg':
                    stringState = 'Khu vui chơi giải trí'
                    break
                case 'lounge':
                    stringState = 'Lounge'
                    break
                case 'complex':
                    stringState = 'Khu phức hợp'
                    break
                case 'retail':
                    stringState = 'Bán lẻ'
                    break
                case 'retail_showroom':
                    stringState = 'Bán lẻ / Showroom'
                    break
                case 'apartment':
                    stringState = 'Chung cư'
                    break
                case 'residential':
                    stringState = 'Nhà ở'
                    break
                case 'store':
                    stringState = 'Cửa hàng flagship'
                    break
                default:
                    break
            }
            return stringState
        }
    },
    methods: {
        get_excerpt(value, maxLength) {
            if (value && value.length > maxLength)
                return `${value.substr(0, maxLength)}...`
            return value
        },
        formatPrice(value) {
            let val = (value / 1).toFixed(0).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        getAtlImgFormTitle(text) {
            if (text) {
                return text
                    .replace(/[àáạảãâầấậẩẫăằắặẳẵ]/g, 'a')
                    .replace(/[ÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴ]/g, 'A')
                    .replace(/[èéẹẻẽêềếệểễ]/g, 'e')
                    .replace(/[ÈÉẸẺẼÊỀẾỆỂỄ]/g, 'E')
                    .replace(/[ìíịỉĩ]/g, 'i')
                    .replace(/[ÌÍỊỈĨ]/g, 'I')
                    .replace(/[òóọỏõôồốộổỗơờớợởỡ]/g, 'o')
                    .replace(/[ÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠ]/g, 'O')
                    .replace(/[ùúụủũưừứựửữ]/g, 'u')
                    .replace(/[ÙÚỤỦŨƯỪỨỰỬỮ]/g, 'U')
                    .replace(/[ỳýỵỷỹ]/g, 'y')
                    .replace(/[ỲÝỴỶỸ]/g, 'Y')
                    .replace(/đ/g, 'd')
                    .replace(/Đ/g, 'D').toLowerCase()
            }
            return text
        }
    }
}