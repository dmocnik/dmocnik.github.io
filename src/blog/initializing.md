# Initializing...

July 23, 2024

## Hello!

This is the first post on the blog section of this website.
While I'm not entirely sure what I want to write about yet, it'll most likely involve hobby projects/things I'm working on in my spare time, photography, or other random things I find interesting.

For now, enjoy this dad joke:

> <em id="dadjoke">{{ joke }}</em>
<script setup>
import { ref, onMounted } from 'vue';

const joke = ref('');

onMounted(() => {
  fetch('https://icanhazdadjoke.com/', {
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(res => res.json())
  .then(data => {
    joke.value = data.joke;
  });
});
</script>

*(Refresh the page for a new joke.)*