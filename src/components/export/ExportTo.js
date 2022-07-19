import React, { useState, useEffect } from 'react';
// import { read, utils, writeFile } from 'xlsx';
// import XLSX from "xlsx";

function ExportTo(props) {
	const [columnFiedls, setColumnFields] = useState();
	const [data, setData] = useState();

	useEffect(() => {
	  let arrayData = [];
	  let arrayTemp = []
	  props.columns.forEach((item, index) => {
	  	arrayTemp.push(item.title);
	  });
	  arrayData.push(arrayTemp);
	  console.log(arrayData);
	  setColumnFields(arrayData);

	  arrayData = [];
	  props.dataSource.forEach((item, index) => {
	  	let arrayTempObject = {};
	  	Object.keys(item).map(data => {
	  		if(data !== "key") {
	  			arrayTempObject[data] = item[data];
	  		}
	  	})
	  	arrayData.push(arrayTempObject);
	  })
	  console.log(arrayData);
	}, [props]);

	const onExportToExcel = () => {

	}
 
	return(
		<div>
		    <a className="mr-2 content-tool-bar" onClick={onExportToExcel}><i className='fa fa-file-excel-o excel-icon'></i>EXCEL</a>
            <a className="mr-2 content-tool-bar"><i className="fa fa-file-pdf-o pdf-icon"></i>PDF</a>
            <a className="mr-2 content-tool-bar"><i className="fa fa-print print-icon"></i>PRINT</a>
		</div>
	)
}

export default ExportTo;