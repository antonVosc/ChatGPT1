<template>
  <main>
    <div id="chat-container"></div>
  <form @submit.prevent="fetchAnswer" class="fixed-form">
      <textarea rows="1" cols="1" placeholder="Ask GPT Model..." v-model="question"></textarea>
      <button type="submit">
        <img src="@/assets/send.svg" alt="send" />
      </button>
    </form>
  </main>
</template>

<script setup>
  import { ref } from 'vue';

  const question = ref("" );
  const fetchAnswer = () => {
    console.log(question.value);
  }
</script>

<style>
  .fixed-form {
    position: fixed;
    bottom: 0;
    width: 100%;
    left: 30px;
  }
</style>