const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices=document.querySelectorAll(".prices");
	// sum
   let sum=0;
	prices.forEach((ele)=>{
		sum+=parseInt(ele.textContent.trim());
	});
	// new row
	const table=document.querySelector("table");
	const newRow=document.createElement("tr");
	const newCell=document.createElement("td");
	// data in the cell
	newCell.setAttribute("id", "ans");
	newCell.textContent=sum;
	//
	newRow.appendChild(newCell);
    table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);

