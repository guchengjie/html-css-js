var nums=new Array();
var score=0;

$(function(){
	newGame();
});

function newGame(){
	//初始化页面
	init();

	//在随机的两个格子上生成数字
	generateNumber();
	generateNumber();

}

//初始化
function init(){
	//初始化单元格的位置
	for(var i=0;i<4;i++){
		for(var j=0;j<4;j++){
			var gridCell=$("#grid-cell-"+i+"-"+j);
			gridCell.css("top",getPosTop(i,j));
			gridCell.css("left",getPosLeft(i,j));
		}
	}

	//初始化数组
	for(var i=0;i<4;i++){
		nums[i]=new Array();
		for(var j=0;j<4;j++){
			nums[i][j]=0;
		}
	}

	//初始化上层单元格，更新页面视图
	updateView();
}

//更新视图
function updateView(){
	$(".number-cell").remove();

	for(var i=0;i<4;i++){
		for(var j=0;j<4;j++){
			var numberCell=$("<div class='number-cell' id='number-cell-"+i+"-"+j+"'></div>");
			$("#grid-container").append(numberCell);

			if(nums[i][j]==0){
				numberCell.css("width","0px");
				numberCell.css("height","0px");
				numberCell.css("top",getPosTop(i,j)+50);
				numberCell.css("left",getPosLeft(i,j)+50);
			}else{
				numberCell.css("width","100px");
				numberCell.css("height","100px");
				numberCell.css("top",getPosTop(i,j));
				numberCell.css("left",getPosLeft(i,j));
				numberCell.css("background-color",getNumberBackgroundColor(nums[i][j]));
				numberCell.css("color",getNumberColor(nums[i][j]));
				numberCell.text(nums[i][j]);
			}
		}
	}
}

//生成随机位置和随机数
function generateNumber(){
	//判断是否还有空位置
	if(noSpace(nums)){
		return;
	}

	//随机一个位置，思路：把所有空位置取出来放到一个新数组中
	var count=0; //空位置的个数
	var temp=new Array(); //13
	for(var i=0;i<4;i++){
		for(var j=0;j<4;j++){
			if(nums[i][j]==0){   // 2  3
				temp[count]=i*4+j;  // 2*4+3=11 
				count++;			// 11/4=2  11%4=3
			}
		}
	}
	var pos=Math.floor(Math.random()*count)
	var x=Math.floor(temp[pos]/4);
	var y=Math.floor(temp[pos]%4);

	//随机一个数字：2和4
	var randomNumber=Math.random()>0.5?2:4;
	nums[x][y]=randomNumber;

	showNumberWithAnimation(x,y,randomNumber);
}

//实现键盘响应
$(document).keydown(function(event){
	event.preventDefault(); //阻止事件的默认动作，否则会出现按上下左右时滚动条也一起动

	switch(event.keyCode){
		case 37: //left
			if(canMoveLeft()){
				moveLeft(); 

			}

		case 38: //top

		case 39: //right

		case 40: //down


	}
});

//向左移动，对每一个数字的左边进行判断，判断落脚点，
//条件：1.落脚点没有数字并且之间没有障碍物  2.落脚点数字和自己相等并且之间没有障碍物
function moveLeft(){
	for(var i=0;i<4;i++){
		for(var j=1;j<4;j++){ //最左边不需要移动
			if(nums[i][j]!=0){
				for(var k=0;k<j;k++){ //从最左边开始遍历当前数字左边所有的元素，进行判断
					if(nums[i][k]==0&&noBlockHorizonal(i,k,j,nums)){
						showMoveAnimation(i,j,i,k);//显示移动的动画效果
						nums[i][k]=nums[i][j]; //从i,j位置移动到i,k位置
						nums[i][j]=0; //将原来位置设置为0
						break;
					}else if(nums[i][k]==nums[i][j]&&noBlockHorizonal(i,k,j,nums)){
						showMoveAnimation(i,j,i,k);//显示移动的动画效果
						nums[i][k]+=nums[i][j]; //从i,j位置移动到i,k位置
						nums[i][j]=0; //将原来位置设置为0
						break;
					}
				}
			}
		}
	}
	setTimeout("updateView()",200);
}









































