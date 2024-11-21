<template>
    <span style="float: left;" v-html="parseLeft"></span>  <span style="float: right;" v-html="parseRight"></span>
    <br v-if="lineBreak" clear="all" />
</template>

<script>
import MarkdownIt from 'markdown-it';
const md = new MarkdownIt()

// Skip rendering the p tags
md.renderer.rules.paragraph_open = (tokens, idx, options, env, self) => {
  return '';
};

md.renderer.rules.paragraph_close = (tokens, idx, options, env, self) => {
  return '';
};

export default {
    name: 'SplitText',
    props: {
        left: {
            type: String,
            required: true
        },
        right: {
            type: String,
            required: true
        },
        lineBreak: {
            type: Boolean,
            required: false,
            default: true
        }
    },
    computed: {
        parseLeft() {
            return md.render(this.left);
        },
        parseRight() {
            return md.render(this.right);
        }
    }
}
</script>