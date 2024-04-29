import { useEffect, useRef } from "react";

interface useIntersectProps {
	root?: Element | null;
	rootMargin?: string;
	threshold?: number;
	onIntersect: IntersectionObserverCallback;
}

const useIntersect = ({
	root = null,
	rootMargin = "10px",
	threshold = 0.5,
	onIntersect,
}: useIntersectProps) => {
	// ref는 DOM에 대한 참조 저장
	const ref = useRef<HTMLElement | null>(null);
	// observerRef는 인스턴스 관리를 위해 사용
	const observerRef = useRef<IntersectionObserver | null>(null);

	useEffect(() => {
		// Ref가 참조하는 값이 있으면 기존 인스턴스 해제
		if (observerRef.current) {
			observerRef.current.disconnect();
		}

		// 새로운 옵저버로 초기화
		const observer = new IntersectionObserver(onIntersect, {
			root,
			rootMargin,
			threshold,
		});

		observerRef.current = observer;

		// 현재 참조하는 DOM 요소가 있으면 observe 시작
		const current = ref.current;

		if (current) {
			observer.observe(current);
		}

		return () => {
			if (current) {
				observer.unobserve(current);
			}
			observer.disconnect(); // 클린업
			observerRef.current = null;
		};
	}, [ref, onIntersect]);
	return { ref };
};

export default useIntersect;
