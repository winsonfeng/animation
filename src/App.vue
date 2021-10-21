<template>
    <div id="app">
        <Lines></Lines>
        <Loading v-if="isLoading"></Loading>
        <div id="nav">
            <router-link to="/">Home</router-link>
            |
            <router-link to="/about">About</router-link>
        </div>
        <transition
                mode="out-in"
                v-on:enter="enter"
                v-on:leave="leave"
                v-bind:css="false"
        >
            <router-view style="position: absolute;width: 100vw;height: 100vh" id="routerView"></router-view>
        </transition>
    </div>


</template>

<script>
    import Lines from './components/Lines'
    import Loading from "./components/Loading";

    export default {
        name: 'app',
        components: {Loading, Lines},
        data() {
            return {
                isLoading:true
            }
        },
        mounted() {
            this.setblock()
            this.isLoading = false
        },
        methods: {
            setblock() {
            },
            enter: function enter(el, done) {
                let block = el.getElementsByClassName('block')
                for (let i = 0; i < block.length; i++) {
                    let sp = document.createElement('span')
                    block[i].appendChild(sp)
                    let newBlock = block[i].childNodes[1]
                    let text = block[i].childNodes[0]
                    let lines = document.getElementsByClassName('lines')
                    let line = document.getElementsByClassName('line')
                    let t1 = new TimelineMax({
                        onComplete: done
                    })
                    // t1.set(el, {
                    //     x:0,
                    //     autoAlpha: 1
                    // })
                    t1.set(newBlock, {
                        width: "100%",
                        x: 200,
                        autoAlpha: 1
                    })

                    t1.set(text, {
                        x: 100,
                        autoAlpha:0
                    })
                    t1.to(lines, 0.5, {
                        width: 0,
                        display: 'none'
                    }).to(line, 0.1, {
                        display: 'none'
                    },"-=0.1").to(newBlock, 2, {
                        width: 0,
                        x: -20,
                        autoAlpha: 1,
                        ease: Power4.easeOut
                    }, "-=0.5").to(text, 2, {
                        x: 0,
                        autoAlpha: 0,
                        ease: Power4.easeOut
                    }, "-=1.9").to(text, 0.5, {
                        autoAlpha: 1,
                        ease: Power4.easeOut
                    },"-=1.72")
                }


            },
            leave: function leave(el, done) {
                let block = el.getElementsByClassName('block')
                for (let i = 0; i < block.length; i++) {
                    let sp = document.createElement('span')
                    block[i].appendChild(sp)
                    let newBlock = block[i].childNodes[1]
                    // TweenMax.to(newBlock, 1, {
                    //     autoAlpha: 1,
                    //     width: "100%",
                    //     ease: Power4.easeOut,
                    //     onComplete: done
                    // });
                    let lines = document.getElementsByClassName('lines')
                    let line = document.getElementsByClassName('line')
                    let t1 = new TimelineMax({
                        onComplete: done
                    })
                    t1.set(line, {
                        display: 'block'
                    })
                    t1.set(lines, {
                        width: 0,
                        display: 'none'
                    })

                    t1.set(newBlock, {
                        width: 0,
                        autoAlpha: 1
                    })

                    t1.to(newBlock, 0.5, {
                        width: "100%",
                        autoAlpha: 1,
                        ease: Power4.easeOut
                    }).to(lines, 0.5, {
                        width: "20%",
                        display: 'block',
                        ease: Power4.easeOut
                    },"-=0.4").to(line, 0.1, {
                        display: 'block'
                    })
                }

            }
        }
    }
</script>
<style lang="scss">
    .block {
        position: relative;
        display: inline-block;
        width: auto;
        padding:6px 20px;
    }

    .block span {
        content: '';
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 1);
        opacity: 0;
        display: block;
        position: absolute;
        z-index: 999;
        top: 0;
        left: 0;
    }

    #app {
        overflow: hidden;
        position: absolute;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background: #4c4c4c;
        color: #fff;
        text-align: center;
    }

    #nav {
        position: absolute;
        z-index: 999;
        color: #fff;

        a {
            color: #ffffff;
        }
    }


</style>
