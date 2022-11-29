import{c as v}from"./clone.9d64bb7a.js";import{c as f}from"./color-convert.69e17089.js";import{c}from"./color-string.e356f5de.js";var g=v.exports,b=f,i=c,u=function(t){if(t instanceof u)return t;if(!(this instanceof u))return new u(t);this.values={rgb:[0,0,0],hsl:[0,0,0],hsv:[0,0,0],hwb:[0,0,0],cmyk:[0,0,0,0],alpha:1};var e;if(typeof t=="string")if(e=i.getRgba(t),e)this.setValues("rgb",e);else if(e=i.getHsla(t))this.setValues("hsl",e);else if(e=i.getHwb(t))this.setValues("hwb",e);else throw new Error('Unable to parse color from string "'+t+'"');else if(typeof t=="object")if(e=t,e.r!==void 0||e.red!==void 0)this.setValues("rgb",e);else if(e.l!==void 0||e.lightness!==void 0)this.setValues("hsl",e);else if(e.v!==void 0||e.value!==void 0)this.setValues("hsv",e);else if(e.w!==void 0||e.whiteness!==void 0)this.setValues("hwb",e);else if(e.c!==void 0||e.cyan!==void 0)this.setValues("cmyk",e);else throw new Error("Unable to parse color from object "+JSON.stringify(t))};u.prototype={rgb:function(){return this.setSpace("rgb",arguments)},hsl:function(){return this.setSpace("hsl",arguments)},hsv:function(){return this.setSpace("hsv",arguments)},hwb:function(){return this.setSpace("hwb",arguments)},cmyk:function(){return this.setSpace("cmyk",arguments)},rgbArray:function(){return this.values.rgb},hslArray:function(){return this.values.hsl},hsvArray:function(){return this.values.hsv},hwbArray:function(){return this.values.alpha!==1?this.values.hwb.concat([this.values.alpha]):this.values.hwb},cmykArray:function(){return this.values.cmyk},rgbaArray:function(){var t=this.values.rgb;return t.concat([this.values.alpha])},rgbaArrayNormalized:function(){for(var t=this.values.rgb,e=[],s=0;s<3;s++)e[s]=t[s]/255;return e.push(this.values.alpha),e},hslaArray:function(){var t=this.values.hsl;return t.concat([this.values.alpha])},alpha:function(t){return t===void 0?this.values.alpha:(this.setValues("alpha",t),this)},red:function(t){return this.setChannel("rgb",0,t)},green:function(t){return this.setChannel("rgb",1,t)},blue:function(t){return this.setChannel("rgb",2,t)},hue:function(t){return t&&(t%=360,t=t<0?360+t:t),this.setChannel("hsl",0,t)},saturation:function(t){return this.setChannel("hsl",1,t)},lightness:function(t){return this.setChannel("hsl",2,t)},saturationv:function(t){return this.setChannel("hsv",1,t)},whiteness:function(t){return this.setChannel("hwb",1,t)},blackness:function(t){return this.setChannel("hwb",2,t)},value:function(t){return this.setChannel("hsv",2,t)},cyan:function(t){return this.setChannel("cmyk",0,t)},magenta:function(t){return this.setChannel("cmyk",1,t)},yellow:function(t){return this.setChannel("cmyk",2,t)},black:function(t){return this.setChannel("cmyk",3,t)},hexString:function(){return i.hexString(this.values.rgb)},rgbString:function(){return i.rgbString(this.values.rgb,this.values.alpha)},rgbaString:function(){return i.rgbaString(this.values.rgb,this.values.alpha)},percentString:function(){return i.percentString(this.values.rgb,this.values.alpha)},hslString:function(){return i.hslString(this.values.hsl,this.values.alpha)},hslaString:function(){return i.hslaString(this.values.hsl,this.values.alpha)},hwbString:function(){return i.hwbString(this.values.hwb,this.values.alpha)},keyword:function(){return i.keyword(this.values.rgb,this.values.alpha)},rgbNumber:function(){return this.values.rgb[0]<<16|this.values.rgb[1]<<8|this.values.rgb[2]},luminosity:function(){for(var t=this.values.rgb,e=[],s=0;s<t.length;s++){var n=t[s]/255;e[s]=n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4)}return .2126*e[0]+.7152*e[1]+.0722*e[2]},contrast:function(t){var e=this.luminosity(),s=t.luminosity();return e>s?(e+.05)/(s+.05):(s+.05)/(e+.05)},level:function(t){var e=this.contrast(t);return e>=7.1?"AAA":e>=4.5?"AA":""},dark:function(){var t=this.values.rgb,e=(t[0]*299+t[1]*587+t[2]*114)/1e3;return e<128},light:function(){return!this.dark()},negate:function(){for(var t=[],e=0;e<3;e++)t[e]=255-this.values.rgb[e];return this.setValues("rgb",t),this},lighten:function(t){return this.values.hsl[2]+=this.values.hsl[2]*t,this.setValues("hsl",this.values.hsl),this},darken:function(t){return this.values.hsl[2]-=this.values.hsl[2]*t,this.setValues("hsl",this.values.hsl),this},saturate:function(t){return this.values.hsl[1]+=this.values.hsl[1]*t,this.setValues("hsl",this.values.hsl),this},desaturate:function(t){return this.values.hsl[1]-=this.values.hsl[1]*t,this.setValues("hsl",this.values.hsl),this},whiten:function(t){return this.values.hwb[1]+=this.values.hwb[1]*t,this.setValues("hwb",this.values.hwb),this},blacken:function(t){return this.values.hwb[2]+=this.values.hwb[2]*t,this.setValues("hwb",this.values.hwb),this},greyscale:function(){var t=this.values.rgb,e=t[0]*.3+t[1]*.59+t[2]*.11;return this.setValues("rgb",[e,e,e]),this},clearer:function(t){return this.setValues("alpha",this.values.alpha-this.values.alpha*t),this},opaquer:function(t){return this.setValues("alpha",this.values.alpha+this.values.alpha*t),this},rotate:function(t){var e=this.values.hsl[0];return e=(e+t)%360,e=e<0?360+e:e,this.values.hsl[0]=e,this.setValues("hsl",this.values.hsl),this},mix:function(t,e){var s=this,n=t,r=e===void 0?.5:e,h=2*r-1,o=s.alpha()-n.alpha(),l=((h*o===-1?h:(h+o)/(1+h*o))+1)/2,a=1-l;return this.rgb(l*s.red()+a*n.red(),l*s.green()+a*n.green(),l*s.blue()+a*n.blue()).alpha(s.alpha()*r+n.alpha()*(1-r))},toJSON:function(){return this.rgb()},clone:function(){var t=new u;return t.values=g(this.values),t}};u.prototype.getValues=function(t){for(var e={},s=0;s<t.length;s++)e[t.charAt(s)]=this.values[t][s];return this.values.alpha!==1&&(e.a=this.values.alpha),e};u.prototype.setValues=function(t,e){var s={rgb:["red","green","blue"],hsl:["hue","saturation","lightness"],hsv:["hue","saturation","value"],hwb:["hue","whiteness","blackness"],cmyk:["cyan","magenta","yellow","black"]},n={rgb:[255,255,255],hsl:[360,100,100],hsv:[360,100,100],hwb:[360,100,100],cmyk:[100,100,100,100]},r,h=1;if(t==="alpha")h=e;else if(e.length)this.values[t]=e.slice(0,t.length),h=e[t.length];else if(e[t.charAt(0)]!==void 0){for(r=0;r<t.length;r++)this.values[t][r]=e[t.charAt(r)];h=e.a}else if(e[s[t][0]]!==void 0){var o=s[t];for(r=0;r<t.length;r++)this.values[t][r]=e[o[r]];h=e.alpha}if(this.values.alpha=Math.max(0,Math.min(1,h===void 0?this.values.alpha:h)),t==="alpha")return!1;var l;for(r=0;r<t.length;r++)l=Math.max(0,Math.min(n[t][r],this.values[t][r])),this.values[t][r]=Math.round(l);for(var a in s)for(a!==t&&(this.values[a]=b[t][a](this.values[t])),r=0;r<a.length;r++)l=Math.max(0,Math.min(n[a][r],this.values[a][r])),this.values[a][r]=Math.round(l);return!0};u.prototype.setSpace=function(t,e){var s=e[0];return s===void 0?this.getValues(t):(typeof s=="number"&&(s=Array.prototype.slice.call(e)),this.setValues(t,s),this)};u.prototype.setChannel=function(t,e,s){return s===void 0?this.values[t][e]:s===this.values[t][e]?this:(this.values[t][e]=s,this.setValues(t,this.values[t]),this)};var w=u;export{w as c};
