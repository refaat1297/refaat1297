<script setup>
  const email = ref('')
  const name = ref('')
  const message = ref('')
  const requestMsg = ref({})

  async function send () {

    if (!email.value || !name.value || !message.value) {
      requestMsg.value = {
        type: 'error',
        message: "Please fill all inputs"
      }
      return
    }

    const {ok} = await $fetch('https://formspree.io/f/mvonoopj', {
      method: 'POST',
      body: {
        email: email.value,
        name: name.value,
        message: message.value
      },
      headers: {
        'Accept': 'application/json'
      }
    })

    if (ok) {
      requestMsg.value = {
        type: 'success',
        message: "Thank you, will contact you soon ❤️"
      }

      name.value = ''
      email.value = ''
      message.value = ''

      setTimeout(() => {
        requestMsg.value = {}
      }, 5000)
    }

  }
</script>

<template>
  <div class="contact-us w-full py-14 md:py-20">
    <div class="container">
      <h2 class="ar-semi-bold-font  text-4xl md:text-5xl lg:text-6xl text-center text-[#1c1d25] mb-8">Contact Us</h2>
      <form class="w-full max-w-screen-md mx-auto" @submit.prevent="send">
        <p v-if="requestMsg.message" class="text-white px-3 py-2 rounded mb-4 text-base" :class="[requestMsg.type === 'error' ? 'bg-[#e11d48]' : 'bg-[#0d9488]']">{{ requestMsg.message }}</p>
        <div class="input-group">
          <span class="ar-semi-bold-font">Name:</span>
          <input type="text" v-model="name" class="ar-navbar-medium-font"  placeholder="Ex: Ahmed Refaat">
        </div>
        <div class="input-group">
          <span class="ar-semi-bold-font">Email:</span>
          <input type="email" v-model="email" class="ar-navbar-medium-font" placeholder="Ex:contact@gmail.com">
        </div>
        <div class="input-group">
          <span class="ar-semi-bold-font">Message</span>
          <textarea
              v-model="message"
              rows="4"
              class="ar-navbar-medium-font"
              placeholder="Ex: We need to work with each other i have..."></textarea>
        </div>
        <button type="submit" class="ar-semi-bold-font">Send</button>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact-us {
  background-color: rgba(#b0b2c3, .6);

  form {
    .input-group {
      margin-bottom: 20px;
      span {
        font-size: 20px;
        margin-bottom: 6px;
        display: block;
      }
      input, textarea {
        display: block;
        width: 100%;
        background-color: #1c1d25;
        color: #fff;
        caret-color: #fff;
        outline: none;
        border: none;
        padding: 10px 12px;
        font-size: 18px;
        border-radius: 6px;

        &::placeholder {
          font-size: 16px;
        }
      }
    }

    button {
      background-color: #1c1d25;
      outline: none;
      border-radius: 6px;
      border: none;
      color: #fff;
      padding: 6px 30px;
      font-size: 18px;
    }
  }
}
</style>
