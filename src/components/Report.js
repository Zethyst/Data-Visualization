import React, { useEffect, useRef } from "react";
import DataTable from "react-data-table-component";
import axios from 'axios'; 

function convertArrayOfObjectsToCSV(array) {
	let result;
	const columnDelimiter = ',';
	const lineDelimiter = '\n';
	const keys = Object.keys(array[0]);
	result = '';
	result += keys.join(columnDelimiter);
	result += lineDelimiter;

	array.forEach(item => {
		let ctr = 0;
		keys.forEach(key => {
			if (ctr > 0) result += columnDelimiter;

			result += item[key];
			
			ctr++;
		});
		result += lineDelimiter;
	});
	return result;
}

function downloadCSV(array) {
	const link = document.createElement('a');
	let csv = convertArrayOfObjectsToCSV(array);
	if (csv == null) return;

	const filename = 'export.csv';

	if (!csv.match(/^data:text\/csv/i)) {
		csv = `data:text/csv;charset=utf-8,${csv}`;
	}
    console.log(typeof(csv));

	link.setAttribute('href', encodeURI(csv));
	link.setAttribute('download', filename);
	link.click();
}


function Report() {

    const ref = useRef(null)
    const [pending, setPending] = React.useState(true);
	const [rows, setRows] = React.useState([]);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://data-visualization-backend-m132.onrender.com/api/data');
                setRows(response.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setPending(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const handleClick = () => {
            downloadCSV(rows);
        };

        const element = ref.current;
        if (element) {
            element.addEventListener('click', handleClick);
            return () => {
                element.removeEventListener('click', handleClick);
            };
        }
    }, [rows]);

  const columns = [
    {
      name: "HBL#",
      selector: (row) => row.hbl,
    },
    {
      name: "MBL#",
      selector: (row) => row.mbl,
    },
    {
      name: "PO# / REF#",
      selector: (row) => row.po,
    },
    {
      name: "Recipt",
      selector: (row) => row.recepit,
    },
    {
      name: "Loading",
      selector: (row) => row.loading,
    },
    {
      name: "Discharge",
      selector: (row) => row.discharge,
    },
    {
      name: "Delivery",
      selector: (row) => row.delivery,
    },
    {
      name: "Booking#",
      selector: (row) => row.booking,
    },
    {
      name: "Size Type",
      selector: (row) => row.size,
    },
    {
      name: "Carrier",
      selector: (row) => row.carrier,
    },
    {
      name: "Commodity",
      selector: (row) => row.commodity,
    },
    {
      name: "Milestone",
      selector: (row) => row.milestone,
    },
    {
      name: "M. Group",
      selector: (row) => row.group,
    },
  ];


  const customStyles = {
    header: {
		style: {
        }
    },
    headCells: {
        style: {
        fontSize: '12px',
        background: "#F1F1F1",
        padding:'10px',

      },
    },
    
  };
  return (
    <div className="py-5 px-5 bg-white  shadow-md  mx-auto w-[80%] translate-x-36 rounded-2xl flex gap-5 flex-col justify-end items-center" >
      <button ref={ref} className="flex gap-1 justify-center items-center px-6 py-3 self-end h-11 w-36  text-white bg-[#EB5D50] font-bold rounded-3xl">
        <span class="material-symbols-outlined">download</span>
        Download
      </button>
      <DataTable
        columns={columns}
        data={rows} progressPending={pending}
        customStyles={customStyles}
        fixedHeader
        pagination
        highlightOnHover
        dense

      ></DataTable>
    </div>
  );
}

export default Report;
