<template>
    <div :class="$style.guide_item">
        <div :class="$style.flex">
            <img :src="data.avatar" :class="$style.img" alt="avatar" width="50">
            <div>
                <div :class="$style.content">
                    <p :class="$style.name">{{ data.name }}</p>
                    <p>{{ data.address }}</p>
                </div>
                <p :class="$style.name">{{ data.title }}</p>
            </div>
        </div>
        <div :class="$style.flex ">
            <div v-for="(item, index) in data.user" :key="item.id" :class="$style.key">
                {{ item.key }} - {{ item.value }} {{ item.key === 'Experience' ? 'Month' : ''  }}
            </div>
        </div>
        <div>
            {{ data.bio }}
        </div>
        <div :class="$style.list_button">
            <button :class="$style.button">Message</button>
            <button :class="$style.button">Invite to travel</button>
        </div>
    </div>
</template>
<script setup lang="ts">
const data = {
    id: 1,
    name: "Nhan cute",
    email: "nhan@gmail.com",
    phone: '00929292',
    bio: "nhan cute nhưng hơi mệt ròi",
    title: "Truong ban du dich phong 10",
    avatar: "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/426587256_1430509044210042_7946706195478323343_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGJAwy2cy3ozNO6_7jEhyDyXu52TFDhi9Ve7nZMUOGL1VpuR-3ErXuUitueR_3NPEQEtrYu0xsOzygnsODxm_yg&_nc_ohc=gUbpHIIsXGYAb6GRbmz&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfC-Ao7Thr6uqZLxEoClrXe32bZiXvBCL0T1yARjvQ-Kcg&oe=66148990",
    address: "DaNang",
    gender: "FEMALE",
    status: "ACTIVE",
    role_id:1,
    user: [
        {
            id: 0,
            key: "Language",
            value: "English"
        },
        {
            id: 1,
            key: "Experience",
            value: 36 //MONTH
        },
    ]
}
</script>
<style lang="scss" module>
.guide_item {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 20px 30px;
    .flex {
        display: flex;
        align-items: flex-end;
        gap: 20px;
    }
    .content {
        display: flex;
        gap: 4px;
    }
    .img {
        border-radius: 50%;
        object-fit: contain;
    }
    .name {
        font-weight: 600;
    }
    .key {
        padding: 7px 10px;
        border-radius: 16px;
        background-color: rgb(233, 234, 235);
        width: fit-content;
    }
    .list_button {
        display: flex;
        gap: 20px;
    }
    .button {
        padding: 8px 15px;
        flex: 1;
        // width: 120px;
        border-radius: 25px;
        // border: 1px solid --color-primary;
    }
}
</style> 


<script setup lang="ts">
const guide = {
  name: 'Nguyễn Văn A',
  description: 'Tôi là một hướng dẫn viên chuyên nghiệp tại Đà Nẵng',
  address: 'Đà Nẵng',
  price: 500000,
  avatar: 'https://avatarfiles.alphacoders.com/218/218123.jpg',
  user_attributes: [
    {
      id: 0,
      key: 'language',
      value: 'Tiếng Anh',
    },
    {
      id: 1,
      key: 'language',
      value: 'Tiếng Trung',
    },
    {
      id: 2,
      key: 'experience',
      value: 24, // MONTHS
    },
  ],
}

function getLabel(attribute: {
  id: number
  key: string
  value: string | number
}) {
  switch (attribute.key) {
    case 'experience':

      return ${attribute.value / 12} năm kinh nghiệm

    default:
      return attribute.value
  }
}
</script>

<template>
  <div :class="$style.guideItemWrapper">
    <div :class="$style.guideItemHeader">
      <img :src="guide.avatar" :class="$style.guideItemAvatar">
      <div :class="$style.guideItemTitle">
        <p :class="$style.guideItemName">
          {{ guide.name }}
        </p>
        <span>-</span>
        <p :class="$style.guideItemAddress">
          {{ guide.address }}
        </p>
      </div>
      <div :class="[$style.guideItemAction, $style.guideItemBtn, $style.guideItemBtnOutline]">
        <!--  -->
      </div>
    </div>
    <div :class="$style.guideItemBody">
      <div :class="$style.guideInfo">
        <p>Giá: {{ guide.price }} / 1 ngày</p>
      </div>
      <div :class="$style.guideBadgeList">
        <span
          v-for="attribute in guide.user_attributes"
          :key="attribute-${attribute.id}"
          :class="$style.guideBadgeItem"
        >
          {{ getLabel(attribute) }}
        </span>
      </div>
      <div :class="$style.guideItemDescription">
        <p>{{ guide.description }}</p>
      </div>
    </div>
    <div :class="$style.guideItemFooter">
      <button :class="[$style.guideItemBtn, $style.guideItemBtnOutline]">
        Message
      </button>
      <button :class="[$style.guideItemBtn, $style.guideItemBtnPrimary]">
        Invite to tour
      </button>
    </div>
  </div>
</template>

<!-- <style lang="scss" module>
.guideItemWrapper {
  background-color: white;
  padding: 1.5rem 1rem;
}

.guideItemHeader {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.guideItemAvatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--color-primary);
  object-fit: contain;
}

.guideItemAction {
  flex: initial !important;
  width: 40px;
  height: 40px;
}

.guideItemTitle {
  flex: 1;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;

  * {
    margin: 0;
    padding: 0;
  }
}

.guideItemName {
  font-size: 1rem;
  font-weight: 600;
}

.guideItemAddress {
  font-size: 0.875rem;
}

.guideBadgeList {
  display: flex;
  gap: 0.25rem;
  flex-wrap: wrap;
}

.guideBadgeItem {
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  background-color: var(--color-gray-lighter);
  font-size: 0.75rem;
  color: var(--color-gray-dark);
}

.guideItemFooter {
  display: flex;
  gap: 0.75rem;
}

.guideItemBtn {
  flex: 1;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  outline: none;
  cursor: pointer;
  transition-duration: 300ms;
} -->