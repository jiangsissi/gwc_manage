<template>
    <div class="login-wrap">
        <vue-particles class="particles" color="#dedede" :particleOpacity="0.7" :particlesNumber="80" shapeType="circle" :particleSize="4" linesColor="#dedede" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150" :moveSpeed="3" :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push">
        </vue-particles>
        <div class="login-panel tc">
            <el-row class="df-c">
                <el-image class="head df-c" src="/static/image/logo.jpg">
                    <div slot="placeholder" class="image-slot">
                        Loading...
                    </div>
                    <div slot="error">
                        <i class="el-icon-picture-outline"></i>
                    </div>
                </el-image>
            </el-row>
            <el-row class="title">狗尾草博客管理平台</el-row>
            <el-row type="flex" align="middle">
                <el-input type="text" placeholder="请输入账号" v-model="loginInfo.account"></el-input>
                <el-input :type="isShow?'text':'password'" placeholder="请输入密码" v-model="loginInfo.password">
                    <i slot="suffix" v-show="isShow" title="隐藏密码" @click="isShow = !isShow" style="cursor:pointer;" class="iconfont icon-login">&#xe61e;</i>
                    <i slot="suffix" v-show="!isShow" title="显示密码" @click="isShow = !isShow" style="cursor:pointer;" class="iconfont icon-login">&#xe625;</i>
                </el-input>
                <el-button plain @click.native="Login">Login</el-button>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isShow: false,
            loginInfo: {
                account: "",
                password: "",
            }
        }
    },
    methods: {
        // 数据校验
        valiData() {
            let loginInfo = this.loginInfo;
            if(!loginInfo.account) {
                this.$message({
                    type: 'info',
                    message: "登录账号不能为空"
                })
                return false;
            }
            if(!loginInfo.password) {
                this.$message({
                    type: 'info',
                    message: '登录密码不能为空'
                })
                return false;
            }
            return true;
        },
        Login() {
            console.log(this.$router.query);
            let isOk = this.valiData();
            if(!isOk) {
                return false;
            }
            this.$cookies.set('isLogin',false);
            console.log('登录',this.loginInfo);
            this.$router.push({
                path: '/'
            })
        }
    }
}
</script>

<style lang="less" scoped>
.login-wrap {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background: url('/static/image/background.jpg') no-repeat center;
    background-size: cover;
    background-color: #333333;
    overflow: hidden;
    .particles {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
    }
    .login-panel {
        color: #ffffff;
        width: 40%;
        height: 200px;
        z-index: 2;
        position: relative;
        margin: 10% auto 0;
        padding: 20px;
        background-color: rgba(0,0,0,.4);
        &:after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(255,255,255,0.8);
            z-index: -1;
            background: url('/static/image/background.jpg') no-repeat center top;
            background-size: cover;
            background-attachment: fixed;
            -webkit-filter: blur(20px);
            -moz-filter: blur(20px);
            -ms-filter: blur(20px); 
            -o-filter: blur(20px); 
            filter: blur(20px); 
            margin: -15px; 
        }//登录面板毛玻璃效果 
        .head {
            width: 90px; 
            height: 90px; 
            border-radius: 50%; 
            overflow: hidden; 
        }
        .title {
            margin: 20px 0; 
        }
        /deep/.el-input__inner {
            background-color: transparent; 
            border: 1px solid #ffffff; 
            color: #ffffff; 
            height: 30px; 
            line-height: 30px; 
            font-size: 12px; 
            border-radius: 0; 
            &:first-child {
                border-right: 0; 
            }
        }
        /deep/.el-button  {
            border: 1px solid #ffffff; 
            border-radius: 0; 
            font-size: 12px; 
            background-color: transparent; 
            height: 30px; 
            line-height: 30px; 
            padding: 0 10px; 
        }
        .icon-login {
            line-height: 30px; 
        }
    }
}
</style>
