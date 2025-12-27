
import React, { useState, useEffect } from 'react';
import SectionWrapper from './components/SectionWrapper';
import ConsultationForm from './components/ConsultationForm';
import { FAQ_DATA, REVIEWS } from './constants';

const REAL_TIME_DATA = [
  { location: "서울 강남구", name: "김", business: "고깃집", time: "방금 전" },
  { location: "경기 수원시", name: "이", business: "파스타 전문점", time: "2분 전" },
  { location: "부산 해운대구", name: "박", business: "국밥집", time: "5분 전" },
  { location: "대구 중구", name: "최", business: "이자카야", time: "8분 전" },
  { location: "인천 남동구", name: "정", business: "베이커리 카페", time: "12분 전" },
  { location: "서울 마포구", name: "한", business: "중식당", time: "15분 전" },
];

const App: React.FC = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [tickerIndex, setTickerIndex] = useState(0);
  const [showTicker, setShowTicker] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowTicker(false);
      setTimeout(() => {
        setTickerIndex((prev) => (prev + 1) % REAL_TIME_DATA.length);
        setShowTicker(true);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openKakaoTalk = () => {
    window.open('https://open.kakao.com/o/so91Efqh', '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden tracking-tight">
      {/* Real-time Ticker Notification */}
      <div className={`fixed bottom-6 left-6 z-[60] transition-all duration-500 transform ${showTicker ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
        <div className="bg-white/95 backdrop-blur-md border border-blue-100 shadow-2xl rounded-2xl p-4 flex items-center gap-4 max-w-sm">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white shrink-0 animate-pulse">
            <i className="fas fa-bell"></i>
          </div>
          <div>
            <p className="text-sm font-bold text-gray-800">
              {REAL_TIME_DATA[tickerIndex].location} {REAL_TIME_DATA[tickerIndex].name}OO 사장님 ({REAL_TIME_DATA[tickerIndex].business})
            </p>
            <p className="text-xs text-blue-600 font-medium">
              방금 무료체험 상담을 신청했습니다. <span className="text-gray-400 ml-1">{REAL_TIME_DATA[tickerIndex].time}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Sticky Header */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg z-50 border-b border-gray-100 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-black text-blue-900 tracking-tighter">KT</span>
          <span className="text-sm font-bold text-gray-500 border-l border-gray-300 pl-2">스마트매장 공식대리점</span>
        </div>
        <button 
          onClick={() => scrollToSection('contact')}
          className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-lg active:scale-95"
        >
          상담 신청
        </button>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 gradient-bg text-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div className="inline-flex gap-2 items-center bg-white/20 px-5 py-2 rounded-full text-sm font-bold mx-auto backdrop-blur-md border border-white/10">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              인건비 절감 & 피크타임 해결 솔루션
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold leading-[1.15] tracking-tighter">
              사장님의 소중한 시간은<br />
              <span className="text-blue-200 underline decoration-blue-400 decoration-[10px] md:decoration-[14px] underline-offset-[8px] md:underline-offset-[12px]">고객에게만</span> 집중하세요.
            </h1>
            <p className="text-lg md:text-2xl text-blue-100 leading-relaxed max-w-2xl mx-auto font-medium opacity-90">
              사람 구하기 힘든 요즘, 테이블오더와 서빙로봇이<br className="hidden md:block" />
              주문부터 서빙까지 완벽하게 자동화해 드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-8 justify-center">
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-10 py-5 bg-white text-blue-900 font-black rounded-2xl shadow-2xl hover:bg-blue-50 transition-all text-center text-xl active:scale-95"
              >
                1주일 무료체험 신청하기
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="px-10 py-5 bg-transparent border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 transition-all text-center text-xl"
              >
                기능 자세히 보기
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <SectionWrapper id="problems" bgColor="bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">사장님, 이런 고민 하고 계신가요?</h2>
          <p className="text-gray-500 text-xl font-medium">요식업 운영의 가장 큰 걸림돌, 이제 기술로 해결할 때입니다.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: "fa-user-clock", title: "심각한 인력난", desc: "구인 공고를 올려도 연락이 없고, 갑자기 안 나오는 알바생 때문에 속 타는 날들" },
            { icon: "fa-won-sign", title: "인건비 부담", desc: "매달 오르는 최저임금과 고정비 부담으로 매출은 올라도 남는 게 없는 현실" },
            { icon: "fa-file-circle-exclamation", title: "반복되는 주문 실수", desc: "바쁜 피크타임, 주문이 꼬이고 누락되어 고객의 불만이 쌓여가는 상황" },
            { icon: "fa-battery-half", title: "단순 반복 업무의 피로", desc: "무거운 그릇 서빙과 단순 반복 업무로 금방 지치고 퇴사하는 직원들" }
          ].map((item, i) => (
            <div key={i} className="flex gap-6 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                <i className={`fas ${item.icon} text-blue-600 text-2xl`}></i>
              </div>
              <div>
                <h4 className="text-2xl font-black mb-2 text-gray-800 tracking-tight">{item.title}</h4>
                <p className="text-gray-500 text-lg leading-snug">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Solution Section */}
      <SectionWrapper id="solution">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-10 leading-tight tracking-tight">주문부터 서빙까지,<br /><span className="text-blue-600">가장 스마트한 흐름</span></h2>
          </div>
          <div className="space-y-8">
            {[
              { step: "01", title: "테이블에서 직접 주문", desc: "손님이 테이블에 앉아 이미지를 보며 직접 메뉴를 고르고 결제까지 완료합니다. 직원을 기다릴 필요가 없습니다." },
              { step: "02", title: "주방으로 실시간 전송", desc: "주문 데이터가 즉시 주방 프린터나 태블릿으로 전달되어 누락 없이 조리가 시작됩니다." },
              { step: "03", title: "로봇의 안전한 서빙", desc: "조리가 끝나면 로봇이 테이블 번호를 인식해 안전하고 정확하게 음식을 배송합니다." }
            ].map((item, i) => (
              <div key={i} className="flex gap-8 md:gap-10 items-start bg-blue-50/40 p-8 md:p-10 rounded-[2.5rem] border border-blue-100 transition-all hover:bg-blue-50">
                <span className="text-6xl font-black text-blue-200 tabular-nums leading-none">{item.step}</span>
                <div>
                  <h4 className="text-2xl font-black mb-2 text-blue-900 tracking-tight">{item.title}</h4>
                  <p className="text-gray-600 text-lg leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Benefits Section */}
      <SectionWrapper id="features" bgColor="bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">도입 즉시 나타나는 4가지 변화</h2>
          <p className="text-gray-500 text-xl font-medium">수많은 매장이 이미 경험하고 있는 실제적인 효과입니다.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { title: "인건비 절감", val: "월 약 200만원↑", desc: "직원 1명 이상의 역할을 충분히 해냅니다." },
            { title: "주문 실수 0%", val: "정확도 100%", desc: "고객이 직접 선택하니까 오배송이 사라집니다." },
            { title: "회전율 증가", val: "평균 20% 향상", desc: "주문과 서빙 대기 시간이 획기적으로 단축됩니다." },
            { title: "직원 만족도", val: "피로도 50%↓", desc: "단순 노동에서 해방되어 서비스 질이 좋아집니다." }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 md:p-8 rounded-3xl text-center border border-gray-100 shadow-sm hover:-translate-y-2 transition-all">
              <h5 className="text-gray-400 font-bold text-xs mb-3 uppercase tracking-widest">{item.title}</h5>
              <div className="text-xl md:text-2xl font-black text-blue-600 mb-4 tracking-tighter">{item.val}</div>
              <p className="text-sm text-gray-500 leading-snug font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Free Trial CTA Section */}
      <section className="py-24 bg-blue-900 text-white text-center px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block bg-yellow-400 text-blue-900 font-black px-6 py-2 rounded-xl mb-8 transform -rotate-1 text-lg shadow-2xl">
            선착순 한정 혜택
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
            먼저 써보고 결정하세요.<br />
            1주일 무료체험 혜택 제공!
          </h2>
          <p className="text-blue-100 text-xl md:text-2xl mb-12 opacity-90 max-w-2xl mx-auto leading-relaxed font-medium">
            우리 매장 환경에 맞을지 고민되시나요?<br />
            아무런 부담 없이 일주일간 현장에서 직접 사용해 보시고 결정하세요.
          </p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-12 md:px-16 py-5 md:py-6 bg-white text-blue-900 font-black rounded-2xl text-xl md:text-2xl shadow-2xl hover:scale-105 transition-all active:scale-95"
          >
            지금 무료 체험 신청하기
          </button>
        </div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-800 rounded-full blur-[120px] opacity-40 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-700 rounded-full blur-[120px] opacity-30 translate-x-1/4 translate-y-1/4"></div>
      </section>

      {/* KT Service Emphasis */}
      <SectionWrapper id="why-kt">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">왜 KT인가요?</h2>
          <p className="text-gray-500 text-xl font-medium">대한민국 통신 1등 기업이 제공하는 차원이 다른 사후 관리</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {[
            { icon: "fa-headset", title: "전담 센터 운영", desc: "24시간 전담 고객센터 운영으로 문제가 생기면 원격 AS를 통해 즉각 대응합니다." },
            { icon: "fa-map-location-dot", title: "전국 엔지니어 대기", desc: "전국 어디서나 전문 기사님이 상시 대기 중입니다. 방문이 필요한 경우 가장 빠르게 달려갑니다." },
            { icon: "fa-gift", title: "점주 특별 혜택", desc: "KT만의 창업 패키지, 통신 결합 할인 등 대기업만이 드릴 수 있는 압도적 혜택을 제공합니다." }
          ].map((item, i) => (
            <div key={i} className="text-center p-8 md:p-10 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all group">
              <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8 text-4xl group-hover:scale-110 transition-transform">
                <i className={`fas ${item.icon}`}></i>
              </div>
              <h4 className="text-2xl font-black mb-4 text-gray-800 tracking-tight">{item.title}</h4>
              <p className="text-gray-500 text-lg leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Trust Elements - Reviews */}
      <SectionWrapper id="reviews" bgColor="bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">실제 사장님들의 목소리</h2>
          <p className="text-gray-500 text-xl font-medium">과장 없이 실제 사장님들의 경험을 전해드립니다.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {REVIEWS.map((review, i) => (
            <div key={i} className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-50 text-blue-400 rounded-full flex items-center justify-center text-xl">
                  <i className="fas fa-quote-left"></i>
                </div>
                <div>
                  <div className="font-black text-xl text-gray-800 tracking-tight">{review.author}</div>
                  <div className="text-sm text-blue-600 font-bold uppercase tracking-widest">{review.businessType}</div>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed text-lg md:text-xl font-medium">"{review.content}"</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* FAQ Section */}
      <SectionWrapper id="faq">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">자주 묻는 질문</h2>
          <p className="text-gray-500 text-xl font-medium">사장님들이 가장 궁금해하시는 점들을 모았습니다.</p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4 md:space-y-5">
          {FAQ_DATA.map((item, i) => (
            <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm transition-all">
              <button 
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                className={`w-full flex justify-between items-center p-6 md:p-7 text-left font-black text-gray-800 transition-colors ${activeFaq === i ? 'bg-blue-50 text-blue-900' : 'hover:bg-gray-50'}`}
              >
                <span className="text-lg md:text-xl tracking-tight">{item.question}</span>
                <i className={`fas fa-chevron-down transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`}></i>
              </button>
              {activeFaq === i && (
                <div className="p-6 md:p-8 bg-blue-50/30 border-t border-gray-100 text-gray-600 text-lg leading-relaxed animate-fadeIn font-medium">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Final CTA Section & Form */}
      <SectionWrapper id="contact" bgColor="bg-blue-50">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black mb-10 leading-[1.3] text-gray-900 tracking-tighter">
              고민은 결정만 늦출 뿐,<br />
              <span className="text-blue-600 underline decoration-blue-200 decoration-[8px] md:decoration-[10px] underline-offset-[8px]">상담 먼저</span> 받아보세요.
            </h2>
            <p className="text-xl text-gray-500 mb-12 leading-relaxed font-medium">
              지금 상담 신청을 남겨주시면 전문가가 매장 상황을 분석하고 최적의 견적과 함께 1주일 무료 체험을 도와드립니다. 계약 강요 없이 사장님의 고민 해결에 집중합니다.
            </p>
            <div className="space-y-6">
              {[
                "상담 후 1주일간 부담 없이 사용",
                "KT 창업 패키지 공식 혜택 적용",
                "전국 방문 설치 및 교육 무상 지원"
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-5 text-blue-700 font-black text-xl">
                  <i className="fas fa-check-circle text-3xl shrink-0"></i>
                  <span className="tracking-tight">{text}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-14">
              <button 
                onClick={openKakaoTalk}
                className="px-10 md:px-12 py-5 md:py-6 bg-[#FEE500] text-gray-900 rounded-2xl font-black text-xl md:text-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-4 group active:scale-95"
              >
                <i className="fas fa-comment text-3xl"></i> 
                <span>카톡 실시간 상담하기</span>
                <i className="fas fa-arrow-right text-lg opacity-30 group-hover:translate-x-2 transition-transform"></i>
              </button>
            </div>
          </div>
          
          <div className="relative">
            {isSuccess ? (
              <div className="bg-white p-12 md:p-16 rounded-[3rem] shadow-2xl text-center space-y-8 border border-blue-100 animate-fadeIn">
                <div className="w-28 h-28 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto text-6xl shadow-inner">
                  <i className="fas fa-check"></i>
                </div>
                <div className="space-y-3">
                  <h3 className="text-4xl font-black text-gray-900 tracking-tight">신청 완료!</h3>
                  <p className="text-xl text-gray-500 font-medium leading-relaxed">
                    담당자가 확인 후 순차적으로<br/>빠르게 연락 드리겠습니다.
                  </p>
                </div>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="px-8 py-3 text-blue-600 font-bold hover:bg-blue-50 rounded-xl transition-all"
                >
                  새로 신청하기
                </button>
              </div>
            ) : (
              <ConsultationForm onSuccess={() => setIsSuccess(true)} />
            )}
          </div>
        </div>
      </SectionWrapper>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-14 text-center md:text-left">
          <div className="space-y-4">
            <div className="text-4xl font-black text-white tracking-tighter">KT 공식대리점</div>
            <p className="text-xl font-medium opacity-70">스마트매장 구축 솔루션 전문 파트너</p>
            <p className="text-sm opacity-40 font-medium tracking-normal">© 2024 KT Authorized Dealer. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-10 text-sm uppercase tracking-widest font-black">
            <a href="#" className="hover:text-white transition-colors border-b-2 border-transparent hover:border-white pb-1">이용약관</a>
            <a href="#" className="hover:text-white transition-colors border-b-2 border-transparent hover:border-white pb-1 text-blue-400 font-black">개인정보처리방침</a>
            <a href="#" className="hover:text-white transition-colors border-b-2 border-transparent hover:border-white pb-1">사업자 정보</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
