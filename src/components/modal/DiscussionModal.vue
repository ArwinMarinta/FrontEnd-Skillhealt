<script lang="ts" setup>
import { defineProps } from "vue";
import { FwbModal } from "flowbite-vue";
import { ref } from "vue";
// import axios from "axios";

const props = defineProps<{
  isShowModal: boolean;
  closeModal: void;
}>();

const title = ref(null);
const complaint = ref(null);
// const UserId = ref(null);

// const PosDiscussion = async () => {
//   try {
//     const response = await axios.post("http://localhost:4000/forum", {
//       user_id: UserId,
//       judul: title,
//       pertanyaan: complaint,
//     },
//     {
//         headers: {
//             Authorization: `Bearer ${token}`
//         }
//     }

// );
//   } catch (error: any) {
//     console.log(error.response.data.message);
//   }
// };
</script>

<template>
  <fwb-modal v-if="props.isShowModal" @close="props.closeModal">
    <template #header>
      <div class="flex items-center justify-center w-full font-bold text-2xl">
        Buat Diskusi
      </div>
    </template>
    <template #body>
      <div>
        <label class="font-semibold">Judul Diskusi</label>
        <input
          v-model="title"
          className=" w-full mt-2 sm:inline text-black  md:w-full py-1.5 pr-12 pl-4 border-0 outline-none rounded-md   focus:outline-none 
                                        ring-2  ring-gray-700/50 focus:ring-RED01 duration-200"
          type="text"
          placeholder=""
        />
      </div>

      <div class="mt-4">
        <label class="font-semibold">Keluhan</label>
        <textarea
          v-model="complaint"
          name="keluhan"
          rows="4"
          cols="50"
          className=" w-full mt-2 sm:inline text-black  md:w-full py-1.5 pr-12 pl-4 border-0 outline-none rounded-md   focus:outline-none 
                                        ring-2  ring-gray-700/50 focus:ring-RED01 duration-200"
        ></textarea>
      </div>
    </template>
    <template #footer>
      <div class="flex justify-end">
        <fwb-button class="bg-RED01 py-2 px-4 font-semibold text-white rounded-md">
          Kirim
        </fwb-button>
      </div>
    </template>
  </fwb-modal>
</template>
