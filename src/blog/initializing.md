# Initializing...

July 23, 2024

## Hello!

This is the first post on the blog section of this website.
While I'm still figuring out the topics, I'll likely cover hobby projects, photography, or other random interests.

For now, enjoy this dad joke:

> <em id="dadjoke">{{ joke }}</em>

<script setup>
import { ref, onMounted } from 'vue';

const joke = ref('');

function getDadJoke() {
  fetch('https://icanhazdadjoke.com/', {
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(res => res.json())
  .then(data => {
    joke.value = data.joke;
  });
}

onMounted(() => {
  getDadJoke();
});
</script>

<button @click="getDadJoke">New Dad Joke</button>