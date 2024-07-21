<template>
  <p class="mb-2">
    <span class="text-2xl">Hi, I'm Josh, </span>a product engineer who loves turning ideas into reality through design
    and engineering.
  </p>
  <button
    v-if="!expandedBio"
    class="text-red font-medium absolute"
    @click="expandedBio = true"
  >
    More about me...
  </button>
  <div
    class="bg-beige relative space-y-3 overflow-hidden transition-all duration-200 ease-in-out "
    :class="expandedBio ? 'max-h-massive' : 'max-h-0'"
  >
    <p>
      My superpower is shipping! Since 2013, I’ve been immersed in startups, earning a reputation for finding the
      critical path and sprinting it.
    </p>
    <p>
      I’ve been a founding engineer, prepped for an IPO, and navigated the hairy middle stages of growth.
      As a manager, an IC, and often something murky in-between, I’ve learned a lot from both successes and failures.
    </p>
    <p>
      I’ve also worked for big companies like Hewlett-Packard and, long ago, gained valuable lessons as a founder.
    </p>
    <p>
      I have deep experience in building scalable, maintainable, and performant web applications using modern
      technologies like React, Vue, Node Express, and MongoDB.
      I also know a thing or two about Python and machine learning (AI).
    </p>
    <img
      class="sm:float-left sm:mr-3 w-full sm:w-3/5"
      src="/images/IMG_7360.jpeg"
      alt="Me, Josh Dean, and my dogs, on a beach, it's windy, and we look pretty silly."
    >
    <p>
      When I’m not coding, you’ll find me sailing, spending time with my dogs, or lost in a great sci-fi book.
    </p>
    <p>
      Welcome to my corner of the web!
    </p>
    <button
      class="text-red font-medium"
      @click="expandedBio = false"
    >
      Less about me...
    </button>
  </div>
</template>

<script setup>
  const expandedBio = ref(false);
</script>
