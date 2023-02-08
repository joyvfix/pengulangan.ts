let s ="";
for (let y = 0; y <= 10; y++) {//baris
  for (let x = 0; x <= 10; x++) {//kolom
    if (y == x ||x+y ==10 ||x==5 ||x==0 ||x==10) {
      document.write(" * ");
    } else {
      document.write(" _ ");
    }
  }
  
  document.write("<br>");
}
document.write("<br>")
let c="";
for (let m = 0; m <= 10; m++) {//baris
  for (let n = 0; n <= 10; n++) {//kolom
    if (m ==0 ||n==0||m==-1||n+m==10||n+m==9||n+m==8||n+m==7||n+m==6||n+m==5||n+m==4 ||n+m==3||n+m==2) {
      document.write(" * ");
    } else {
      document.write(" _ ");
    }
  }
  
  document.write("<br>");
}

document.write("<br>")
let a="";
for (let a = 0; a <= 10; a++) {//baris
  for (let b = 0; b <= 10; b++) {//kolom
    if (a+b==5||a-b==5||b-a==5||b+a==15) {
      document.write(" * ");
    } else {
      document.write(" _ ");
    }
  }
  
  document.write("<br>");
}



