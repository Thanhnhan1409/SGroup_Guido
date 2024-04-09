<template>
    <div :class="$style.customTreeContainer">
        <div :class="$style.titleSidebar">
            <img src="@/assets/icons/icon-xmark.svg" @click="$emit('closeSidebar')" :class="$style.titleIcon" width="20"
                height="20" alt="">
            <span :class="$style.titleSidebarContent">Guido</span>
            <img src="@/assets/icons/icon-search.svg" :class="$style.titleIcon" width="20" height="20" alt="">
        </div>
        <div v-for="(item, index) in dataSource" :class="$style.treeNode" :key="item.id">
            <div :class="$style.parentTreeNode" @click="toggleNode(item.id)">
                <div :class="$style.labelTreeNode">
                    <img v-show="item.frontIcon" :class="$style.frontIconNode" :src="item.frontIcon" alt="">
                    <div>
                        <p :class="[isOpen(item.id) ? $style.isHighlight : '', $style.customTreeNode, item.subLabel ? $style.userName : '']">{{ item.label }}</p>
                        <p v-show="item.subLabel" :class="$style.subLabel">{{ item.subLabel }}</p>
                    </div>
                </div>
                <img v-show="item.behindIcon"
                    :class="[$style.behindIconNode, isOpen(item.id) && item.id < 5 ? $style.roteIcon : '']"
                    :src="item.behindIcon" alt="" width="20" height="20">
            </div>
            <div v-if="item.children" :class="$style.childrenTreeNode">
                <ul v-if="index === 0 && isOpen(item.id)" :class="$style.buttonChildrenNode">
                    <li v-for="subItem in item.children" :class="isChildHighligth(subItem.id) ? $style.isActiveButton : ''"
                        :key="item.id" @click="handleChildNodeClick(subItem.id)">
                        {{ subItem.label }}
                    </li>
                </ul>
                <ul v-else-if="isOpen(item.id)" :class="$style.childrenTreeNodeItem">
                    <li v-for="subItem in item.children" :key="item.id"
                        :class="isChildHighligth(subItem.id) ? $style.isHighlight : ''"
                        @click="handleChildNodeClick(subItem.id)">{{ subItem.label }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits } from 'vue'

interface Tree {
    id: number
    frontIcon: string
    label: string
    behindIcon: string
    subLabel: string
    children?: Tree[]
}

const dataSource = ref<Tree[]>([
    {
        id: 0,
        frontIcon: './assets/icons/icon-avatar.svg',
        label: 'Phan Thi Thanh Nhan',
        behindIcon: './assets/icons/icon-down-arrow.svg',
        subLabel: "Freelancer",
        children: [
            {
                id: 11,
                label: 'Online',
            },
            {
                id: 12,
                label: 'Invisible',
            },
        ],
    },
    {
        id: 1,
        behindIcon: './assets/icons/icon-down-arrow.svg',
        label: 'Find work',
        children: [
            {
                id: 13,
                label: 'Find work',
            },
            {
                id: 14,
                label: 'Save Jobs',
            },
            {
                id: 15,
                label: 'Proposals',
            },
            {
                id: 16,
                label: 'Profile',
            },
            {
                id: 17,
                label: 'My stats',
            },
            {
                id: 18,
                label: 'My Project Dashboard',
            },
        ],
    },
    {
        id: 2,
        behindIcon: './assets/icons/icon-down-arrow.svg',
        label: 'My jobs',
        children: [
            {
                id: 29,
                label: 'My jobs',
            },
            {
                id: 30,
                label: 'All contacts',
            },
            {
                id: 31,
                label: 'Work dairy',
            },
        ],
    },
    {
        id: 3,
        behindIcon: './assets/icons/icon-down-arrow.svg',
        label: 'Reports',
        children: [
            {
                id: 19,
                label: 'Overview',
            },
            {
                id: 20,
                label: 'My Reports',
            },
            {
                id: 21,
                label: ' Billings & Earnings ',
            },
            {
                id: 22,
                label: ' Connects History ',
            },
            {
                id: 23,
                label: ' Transaction History ',
            },
            {
                id: 24,
                label: ' Certificate of Earnings ',
            },
        ],
    },
    {
        id: 4,
        label: "Message"
    },
    {
        id: 5,
        behindIcon: './assets/icons/icon-question.svg',
        label: "Help",
        children: [
            {
                id: 25,
                label: " Help and Support "
            },
            {
                id: 26,
                label: " Community and Forums "
            },
            {
                id: 27,
                label: " Help and Support "
            },
        ]
    },
    {
        id: 6,
        behindIcon: './assets/icons/icon-send.svg',
        label: "Direct Contracts",
    },
    {
        id: 7,
        behindIcon: './assets/icons/icon-nav.svg',
        label: "Apps and Offers",
    },
    {
        id: 8,
        behindIcon: './assets/icons/icon-bell.svg',
        label: "Notifications",
        children: [
            {
                id: 28,
                label: "See all notifications"
            }
        ]
    },
    {
        id: 9,
        frontIcon: './assets/icons/icon-setting.svg',
        label: "Settings",
    },
    {
        id: 10,
        frontIcon: './assets/icons/icon-right-arrow.svg',
        label: "Log out",
    }

])

const openedNodeIndex = ref<number>(null);
const nodeClikedIndex = ref<number>(11);


const toggleNode = (id: number) => {
    if (openedNodeIndex.value === id) {
        openedNodeIndex.value = null; // Đóng nếu mục đã mở
    } else {
        openedNodeIndex.value = id; // Mở mục mới nếu chưa mở
    }
};

const isOpen = (id: number) => {
    return openedNodeIndex.value === id;
};

const handleChildNodeClick = (id: number) => {
    nodeClikedIndex.value = id;
}

const isChildHighligth = (id: number) => {
    return nodeClikedIndex.value === id
}
const props = defineProps<{
    isShowProps: Boolean
}>()

const emits = defineEmits<{
    (e: "closeSidebar", data: Boolean): void
}>()
</script>

<style lang="scss" module>
.customTreeContainer {
    padding: 0 16px;
    background-color: #ffff;
    overflow: auto;
    height: 100vh;

    .titleSidebar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #E8E8E8;

        .titleSidebarContent {
            text-align: center;
            padding: 18px 0;
            font-size: 24px;
            color: var(--color-primary);
        }

        .titleIcon {
            cursor: pointer;
        }

    }

    .treeNode {
        border-bottom: 1px solid #E8E8E8;

        .parentTreeNode {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 14px;
            padding: 18px 0;
            cursor: pointer;

            &:hover {
                color: var(--color-primary);
            }

            .labelTreeNode {
                display: flex;
                align-items: center;

                .userName {
                    font-size: 16px;
                    font-weight: 550;
                }
                .subLabel {
                    font-size: 11px;
                    font-weight: 500;
                    color: #676767;
                }
            }

            .frontIconNode {
                border-radius: 50%;
                object-fit: contain;
                width: 20px;
                margin-right: 10px;
            }

            .behindIconNode {
                transform: rotate(0deg);
                transition: transform 0.1s;
            }

            .roteIcon {
                transform: rotate(180deg);
                transition: transform 0.1s;
            }
        }

        .childrenTreeNode {
            cursor: pointer;

            .buttonChildrenNode {
                display: flex;
                justify-content: center;
                align-items: center;
                border: 2px solid #d9d9d9;
                border-radius: 28px;
                margin-bottom: 10px;

                li {
                    flex: 1;
                    text-align: center;
                    padding: 10px;
                    color: var(--color-primary);
                }

                .isActiveButton {
                    border-radius: 28px;
                    background-color: var(--color-primary);
                    color: #ffff;
                }
            }

            .childrenTreeNodeItem {
                margin-bottom: 10px;

                li {
                    padding: 6px 15px;
                    font-size: 14px;

                    &:hover {
                        background-color: #f1f1f1;
                    }
                }
            }
        }
    }

    .isHighlight {
        color: var(--color-primary);
    }
}
</style>
