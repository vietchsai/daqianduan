require('./index.scss');

import happy from './happy.jpg';
import logo from './logo.png';

// 生成img节点
function genImage(src, name){
  let img = new Image();
  img.src = src;
  img.alt = name;
  img.id = "image-" + name;
  return img;
}

document.body.appendChild(genImage(happy, "happy"));
document.body.appendChild(genImage(logo, "logo"));
