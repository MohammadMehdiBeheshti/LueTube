const isMobile = () => {
	const maxTouchPoints = navigator.maxTouchPoints > 0;
	const userAgent = /Android|iPhone/i.test(navigator.userAgent);
	return maxTouchPoints || userAgent;
};

export default isMobile;
