
import React, { useState } from 'react';
import { ConsultationForm as FormType } from '../types';

interface Props {
  onSuccess: () => void;
}

const ConsultationForm: React.FC<Props> = ({ onSuccess }) => {
  const [formData, setFormData] = useState<FormType>({
    name: '',
    phone: '',
    businessName: '',
    location: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * 구글 스프레드시트 연동 가이드:
   * 1. 시트 메뉴 [확장 프로그램] -> [Apps Script]
   * 2. 가이드된 doPost 함수 작성 후 [배포] -> [웹 앱] 배포
   * 3. 생성된 URL을 아래 변수에 대입하세요.
   */
  const GOOGLE_SHEET_WEB_APP_URL = '#'; 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (GOOGLE_SHEET_WEB_APP_URL !== '#') {
        // 구글 앱스 스크립트로 데이터 전송
        await fetch(GOOGLE_SHEET_WEB_APP_URL, {
          method: 'POST',
          mode: 'no-cors', 
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
      }
      
      // 시뮬레이션 지연 (사용자 경험용)
      await new Promise(resolve => setTimeout(resolve, 1200));
      onSuccess();
    } catch (error) {
      alert("신청 처리 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-blue-50">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-black text-gray-900 mb-2 tracking-tight">
          무료 상담 신청하기
        </h3>
        <p className="text-blue-600 font-bold">1주일 무료 체험 혜택 포함</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">사장님 성함</label>
          <input
            required
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="성함을 입력해주세요"
            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">연락처</label>
          <input
            required
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="010-0000-0000"
            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">매장명 (또는 업종)</label>
          <input
            required
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            placeholder="매장 이름이나 주요 업종"
            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">지역</label>
          <input
            required
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="예: 서울 강남구"
            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
          />
        </div>
        <button
          disabled={isSubmitting}
          type="submit"
          className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white text-xl font-black rounded-xl transition-all shadow-lg active:scale-95 disabled:bg-gray-400 mt-4 tracking-tight"
        >
          {isSubmitting ? "신청 정보를 전송 중..." : "지금 무료 상담 신청하기"}
        </button>
        <p className="text-xs text-gray-400 text-center mt-6 leading-relaxed">
          * 입력하신 정보는 원활한 상담 진행을 위해서만 활용됩니다.<br/>
          * 상담 신청은 계약이 아니므로 부담 없이 남겨주세요.
        </p>
      </form>
    </div>
  );
};

export default ConsultationForm;
