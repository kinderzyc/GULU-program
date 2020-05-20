<template>
    <div class="col" :class="colClass" 
    :style="colStyle">
        <div>
          <slot></slot>
        </div>
    </div>
</template>

<script>
  let validator = (value) =>{
      let keys = Object.keys(value)
                let valid = true
                keys.forEach(key=>{
                    if(!['span','offset'].includes(key)){
                        valid = false
                    }
                })
                return valid 
  }

export default {
    name: 'GuluCol',
    props:{
        span: {
            type: [Number,String]
        },
        offset:{
            type: [Number,String]
        },
        ipad:{
              type:Object,
            validator,
        },
        narrowPc:{
              type:Object,
            validator,
        },
        pc:{
                type:Object,
            validator,
        },
        widepc:{
                type:Object,
            validator,
        }
   },
   data(){
       return{
           gutter: 0,
       }
   },
   methods:{
         createClasses(obj,str = ''){
                if(!obj){return []}
                let array = []
                if(obj.span){
                    array.push(`col-${str}${obj.span}`)
                }
                  if(obj.offset){
                    array.push(`offset-${str}${obj.offset}`)
                }
                return array
            }
   },
   computed:{
       colClass(){
           let {span,offset,ipad,narrowPc,pc,widepc} = this
           let createClasses = this.createClasses
           return [
            ...createClasses({span,offset}),
            ...createClasses(ipad,'ipad-'),
            ...createClasses(narrowPc,'narrow-pc-'),
            ...createClasses(pc,'pc-'),
            ...createClasses(widepc,'widepc-')
           ]
       },
       colStyle(){
           return{
               paddingLeft: this.gutter / 2 + 'px',
               paddingRight: this.gutter / 2 + 'px'
           }
       }
   }
}
</script>

<style lang="scss" scoped>
     .col{
            // width: 50%;
            // background: rgb(0, 255, 191);
            // padding: 0 10px;
            // border: 1px solid #333;

            $class-perfix:col-;

            @for $n from 1 through  24{
                &.#{$class-perfix}#{$n}{
                    width: ($n / 24) * 100%;
                }
            }

             $class-perfix:offset-;

            @for $n from 1 through  24{
                &.#{$class-perfix}#{$n}{
                   margin-left: ($n / 24) * 100%;
                }
            }
             @media (max-width: 576px){
                    
            $class-perfix:col-phone-;

            @for $n from 1 through  24{
                &.#{$class-perfix}#{$n}{
                    width: ($n / 24) * 100%;
                }
            }

             $class-perfix:offset-phone-;

            @for $n from 1 through  24{
                &.#{$class-perfix}#{$n}{
                   margin-left: ($n / 24) * 100%;
                }
            }
          }

            @media (min-width: 577px){
                    
            $class-perfix:col-ipad-;

            @for $n from 1 through  24{
                &.#{$class-perfix}#{$n}{
                    width: ($n / 24) * 100%;
                }
            }

             $class-perfix:offset-ipad-;

            @for $n from 1 through  24{
                &.#{$class-perfix}#{$n}{
                   margin-left: ($n / 24) * 100%;
                }
            }
          }

           @media (min-width: 769px){
                    
            $class-perfix:col-narrow-pc-;

            @for $n from 1 through  24{
                &.#{$class-perfix}#{$n}{
                    width: ($n / 24) * 100%;
                }
            }

             $class-perfix:offset-narrow-pc-;

            @for $n from 1 through  24{
                &.#{$class-perfix}#{$n}{
                   margin-left: ($n / 24) * 100%;
                }
            }
          }

          @media (min-width: 993px){
                    
            $class-perfix:col-pc-;

            @for $n from 1 through  24{
                &.#{$class-perfix}#{$n}{
                    width: ($n / 24) * 100%;
                }
            }

             $class-perfix:offset-pc-;

            @for $n from 1 through  24{
                &.#{$class-perfix}#{$n}{
                   margin-left: ($n / 24) * 100%;
                }
            }
          }

            @media (min-width: 1201px){
                    
            $class-perfix:col-wide-pc-;

            @for $n from 1 through  24{
                &.#{$class-perfix}#{$n}{
                    width: ($n / 24) * 100%;
                }
            }

             $class-perfix:offset-wide-pc-;

            @for $n from 1 through  24{
                &.#{$class-perfix}#{$n}{
                   margin-left: ($n / 24) * 100%;
                }
            }
          }
        }
       
</style>