<template>
  <section>
    <div class="grid grid-flow-row grid-rows-1 grid-cols-1 md:grid-cols-2">
      <div class="hidden md:block">
        <img
          src="https://cdn.leafage.top/photo-1609.jpg"
          alt="leafage contact"
          class="h-full object-cover"
        />
      </div>
      <div
        class="
          bg-gray-200
          p-2
          md:p-10
          leading-relaxed
          px-2
          md:px-12
          lg:px-16
          xl:px-20
        "
      >
        <h3 class="text-4xl font-extrabold my-4">Contact</h3>
        <p class="text-gray-600">
          网站所有内容均免费，长久可用，哦对，还有源代码，如果喜欢可以fork，或者star，有问题的或者有想法的可以联系我。
        </p>
        <form class="my-8">
          <div class="my-3">
            <label class="text-gray-600">Name: </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              class="w-full p-2 outline-none focus:ring-1"
              autocomplete="off"
            />
          </div>
          <div class="my-3">
            <label class="text-gray-600">Email: </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              class="w-full p-2 outline-none focus:ring-1"
              autocomplete="off"
            />
          </div>
          <div class="my-3">
            <label class="text-gray-600">Subject: </label>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              class="w-full p-2 outline-none focus:ring-1"
              autocomplete="off"
            />
          </div>
          <div class="my-3">
            <label class="text-gray-600">Your Message: </label>
            <textarea
              name="message"
              placeholder="Your Message"
              class="w-full p-2 h-40 outline-none focus:ring-1"
              autocomplete="off"
            ></textarea>
          </div>
          <button
            aria-label="send_message"
            type="submit"
            href="mailto:little3201@163.com?subject=Leafage%20Website%20Question"
            class="
              text-white
              uppercase
              text-xs
              font-bold
              bg-gray-500
              py-3
              w-1/2
              outline-none
            "
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
</template>


<script lang="ts">
import { defineComponent, useMeta } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "About",

  head: {},

  setup() {
    useMeta(() => ({
      title: "Contact - Leafage",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "联系Leafage，获取更多信息，详细内容请看详情",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "leafage, 生活分享, 资源推荐, 技术总结, 影视浏览, 布吉岛",
        },
      ],
    }));
  },
});
</script>