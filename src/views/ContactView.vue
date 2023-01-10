<template>
    <div class="contacts w-100 h-100 d-flex align-items-center justify-content-center">
        <div class="contact-container text-black mt-5 d-flex flex-column align-items-start">
            <h2 class="title">Contact Me</h2>
            <form action="https://formspree.io/f/mzbqbowj" method="POST" class="gap-3 w-100 h-7 contact-form d-flex flex-column">
                <!-- name and surname should be on one line -->
                <span class="name-surname d-flex gap-3">
                    <input type="text" class="px-3 name w-50 py-2" placeholder="Enter your name...">
                    <input type="text" class="px-3 surname w-50 py-2" placeholder="Enter your surname...">
                </span>
                <input type="email" class="px-3 email py-2" placeholder="e.g. jacob@gmail.com">
                <textarea id="message" name="message" rows="3" cols="50" placeholder="Leave a message" class="px-3" ></textarea>
                <button class="send py-2 w-100 rounded-2">Send</button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .contact-container {
        height: 70%;
        width: 50%;
        background: rgba(255, 255, 255, 0.755);
        border: 5px;
        padding: 5rem 5rem;
    }

    .title {
        position: relative;
        z-index: 0;
        line-height: 2rem;
        color: #000;
        scale: .8;
    }
    .title::before {
        content: '';
        height: 30px;
        width: 30px;
        background: var(--theme-color);
        position: absolute;
        border-radius: 50%;
        z-index: -1;
        transform: translateX(-1.2rem);
    }

    .contact-form {
        margin-top: 2rem;
    }

    input {
        outline-color: var(--theme-color);
        position: relative;
    }

    .name {
        position: relative;
    }

    textarea{
        resize: none;
        outline-color: var(--theme-color);
    }

    button {
        background: var(--theme-color);
        border: none;
        outline: none;
    }
</style>