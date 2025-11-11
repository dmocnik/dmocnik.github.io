---
icon: 👋
title: Initializing...
date: July 23, 2024
---

# {{ $frontmatter.title }}

{{ $frontmatter.date }}

## Hello!

This is the first entry in the writings section of this site.
I started this space to showcase things that aren't really "meant" for a resume, as well as things I'm working on in my spare time.
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

<button class="inline-button" @click="getDadJoke">New Dad Joke</button>