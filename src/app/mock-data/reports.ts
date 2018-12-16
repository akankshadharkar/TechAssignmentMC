import {ImgFile} from '../model/ImgFile';

export const REPORTS: ImgFile[] = [
	{id: 'bl1705', type:'Blood Report', src:'../assets/mock-data/img/bldreport.png',patientName:"Akanksha",patientID:"2905",docAssigned:"Dr. Sumitha Rao",doa:"20/11/18"},
	{id: 'pr1805', type:'Prescription', src:'../assets/mock-data/img/prescription.jpg',patientName:"Ankush",patientID:"1705",docAssigned:"Dr. Manjeet Singh",doa:"10/09/18"},
	{id: 'mr1905', type:'MRI', src:'../assets/mock-data/img/mri.jpg',patientName:"Aditya",patientID:"2711",docAssigned:"Dr. Vaidehi Arora",doa:"12/11/18"},
	{id: 'xr2005', type:'X-Ray', src:'../assets/mock-data/img/xray.jpg',patientName:"Dhruv",patientID:"2511",docAssigned:"Dr. Unnati Bhaskar",doa:"14/12/18"},
	{id: 'ur2105', type:'Urine Sample', src:'../assets/mock-data/img/ursmp.jpg',patientName:"Shubhi",patientID:"2505",docAssigned:"Dr. Suma Reddy",doa:"10/10/18"}
]
