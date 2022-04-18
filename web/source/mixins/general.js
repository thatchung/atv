import moment from "moment"
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
        locationFilter(state) {
            let stringState = state
            switch (state) {
                case 'HOCHIMINH':
                    stringState = 'HO CHI MINH'
                    break
                case 'HANOI':
                    stringState = 'HA NOI'
                    break
                case 'HAIPHONG':
                    stringState = 'HAI PHONG'
                    break
                case 'HALONG':
                    stringState = 'HA LONG'
                    break
                case 'DANANG':
                    stringState = 'DA NANG'
                    break
                case 'BINHDUONG':
                    stringState = 'BINH DUONG'
                    break
                case 'NHATRANG':
                    stringState = 'NHA TRANG'
                    break
                case 'BENTRE':
                    stringState = 'BEN TRE'
                    break
                case 'MYTHO':
                    stringState = 'MY THO'
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