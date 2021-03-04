import styled from 'styled-components';

// Credit to https://codepen.io/xonic/pen/KWMaqe for this
export function ScrollDown() {
	return (
		<StyledScroll>
			<div className="chevron"></div>
			<div className="chevron"></div>
			<div className="chevron"></div>
		</StyledScroll>
	);
}

const StyledScroll = styled.div`
	position: relative;
	width: 24px;
	height: 24px;

	.chevron {
		position: absolute;
		width: 28px;
		height: 8px;
		opacity: 0;
		transform: scale3d(0.5, 0.5, 0.5);
		animation: move 3s ease-out infinite;
	}

	.chevron:first-child {
		animation: move 3s ease-out 1s infinite;
	}

	.chevron:nth-child(2) {
		animation: move 3s ease-out 2s infinite;
	}

	.chevron:before,
	.chevron:after {
		content: ' ';
		position: absolute;
		top: 0;
		height: 100%;
		width: 51%;
		background: #094067;
	}

	.chevron:before {
		left: 0;
		transform: skew(0deg, 30deg);
	}

	.chevron:after {
		right: 0;
		width: 50%;
		transform: skew(0deg, -30deg);
	}

	@keyframes move {
		25% {
			opacity: 1;
		}
		33% {
			opacity: 1;
			transform: translateY(30px);
		}
		67% {
			opacity: 1;
			transform: translateY(40px);
		}
		100% {
			opacity: 0;
			transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
		}
	}
`;
