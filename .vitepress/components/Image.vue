<template>
    <div>
        <p>
            <center>
                <img :src="src"/>
            </center>
        
    
        <center style="margin-top: 4px;">
            <em>
                {{ caption }}
            </em>
        </center>
        </p>
    </div>
</template>

<script>
export default {
    name: 'Image',
    props: {
        src: {
            type: String,
            required: true
        },
        caption: {
            type: String,
            required: false
        }
    }
}
</script>