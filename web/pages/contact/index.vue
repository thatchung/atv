<template>
  <div>
    <div class="container">
      <h2 class="section-title">Contact</h2>
      <div class="line-all"></div>
      <div class="row contact-info">
        <div class="col-4 col-md-4">
          <div>
            <div class="place">Ho Chi Minh</div>
            <div class="address">Level 9, Doxaco Building, 307B Nguyen Van Troi st., W1, Tan Binh Dict., HCMC</div>
            <div class="type">Head Office</div>
          </div>
        </div>
        <div class="col-4 col-md-4">
          <div>
            <div class="place">Ha Noi</div>
            <div class="address">Level 5, Sentinel Place, 41A Ly Thai To st., Hoan Kiem dist., Ha Noi</div>
            <div class="type">Branch</div>
          </div>
        </div>
        <div class="col-4 col-md-4">
          <div>
            <div class="place">Da Nang</div>
            <div class="address">267 Tran Phu, Q. Hai Chau,Da Nang City</div>
            <div class="type">Branch</div>
          </div>
        </div>
      </div>
      <div class="line-all"></div>
      <div class="phone">Hotline <span>+84 908 734 134</span></div>
    </div>
    <div class="mailus">
      <div class="container">
        <h2 class="mail-title">Mail Us</h2>
        <div class="row">
          <div class="col-6 col-md-6">
            <div class="line-all-d"></div>
            <div>Please select type of enquiry</div>
            <div class="line-all-d"></div>
            <input class="c-input" type="text" name="" placeholder="Subject*" />
            <div class="line-all-d"></div>
            <input class="c-input" type="text" name="" placeholder="Title" />
            <div class="line-all-d"></div>
            <input class="c-input" type="text" name="" placeholder="Fist name" />
            <div class="line-all-d"></div>
            <input class="c-input" type="text" name="" placeholder="Last name" />
            <div class="line-all-d"></div>
          </div>
          <div class="col-6 col-md-6">
            <div class="line-all-d"></div>
            <input class="c-input" type="text" name="" placeholder="Company Name" />
            <div class="line-all-d"></div>
            <input class="c-input" type="text" name="" placeholder="Contact No*" />
            <div class="line-all-d"></div>
            <input class="c-input" type="text" name="" placeholder="Email" />
            <div class="line-all-d"></div>
            <input class="c-input" type="text" name="" placeholder="City" />
            <div class="line-all-d"></div>
            <input class="c-input" type="text" name="" placeholder="Postal" />
            <div class="line-all-d"></div>
          </div>
          <div class="col-12 col-md-12">
            <div>Your Message</div>
            <textarea id="txtid" name="txtname" rows="5" cols="50" maxlength="200">
            </textarea>
          </div>
          <div class="btn-send">Send</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage'
}
</script>
<style lang="scss">
.container{
  padding-bottom: 4rem;
}
.section-title{
  font-size: 5rem;
  margin-top: 2rem;
  margin-bottom: 0rem;
}
.contact-info{
  margin-top: 2rem;
}
.place{
  font-size: 1.5rem;
  font-weight: 600;
}
.address{
  font-size: 1rem;
  margin: 0.5rem 0rem;
  height: 70px;
}
.type{
  font-weight: 600;
}
.phone{
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 1.5rem;
}
.phone span{
  color: #7E8083;
}
.mailus{
  width: 100%;
  padding: 4rem 0rem;
  background-color: #AFB0B3;
}
.mail-title{
  font-size: 5rem;
  margin-bottom: 1rem;
}
.line-all-d{
  width: 100%;
  margin: 0.5rem 0rem;
  border-top: 2px solid #464748;
}
.c-input{
  border: none;
  width: 100%;
  background-color: #AFB0B3;
  &:focus-visible {
    outline: none;
  }
}
.c-input:-webkit-autofill,
.c-input:-webkit-autofill:hover,
.c-input:-webkit-autofill:focus,
.c-input:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 30px #AFB0B3 inset !important;
}
textarea{
  width: 100%;
  background-color: #AFB0B3;
  margin-top: 1rem;
  border:2px solid #464748;
  &:focus-visible {
    outline: none;
  }
}
.btn-send{
  color: white;
  background-color: black;
  padding: 0.2rem 0.8rem;
  cursor: pointer;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
}
</style>