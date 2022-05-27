module.exports = {
	columns: 12,
	outputStyle: 'scss',
	offset: '30px',
	container: {
		maxWidth: '1260px',
		fields: '30px',
	},
	breakPoints: {
		md: {
			width: '900px',
		},
		sm: {
			width: '720px',
		},
		xs: {
			width: '576px',
			/*
				offset: "5px",
				fields: "5px"
	      */
		},
		xxs: {
			width: '400px',
		},
	},
	mobileFirst: false,
	tab: '\t',
	/*
	mixinNames: {
		container: 'container',
	},
	detailedCalc: true*/
}
