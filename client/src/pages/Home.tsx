import { Button } from "@/components/ui/button";
import { Download, Clock, Zap } from "lucide-react";
import { useState } from "react";

/**
 * App Distribution Site - Home Page
 * 
 * Design Philosophy: Modern Minimalist with Gradient Accents
 * - Clean, efficient interface for app discovery and download
 * - Blue (#1e40af) and Purple (#7c3aed) gradient accents
 * - Generous whitespace and clear visual hierarchy
 * - Smooth interactions and hover effects
 */

export default function Home() {
  const [hoveredApp, setHoveredApp] = useState<string | null>(null);

  const apps = [
    {
      id: "digital-clock",
      name: "DigitalClock",
      description: "시간과 날짜를 표시하고, 바탕색상과 글자색상을 자유롭게 변화시킬 수 있는 PC용 디지털 시계입니다.",
      image: "/images/digital-clock.png",
      features: ["시간 & 날짜 표시", "색상 커스터마이징", "항상 위에 표시"],
      filename: "DigitalClock.exe",
      icon: Clock,
    },
    {
      id: "alttab-pro",
      name: "CustomAltTabPro",
      description: "현재 열어둔 탭을 항목별로 정리하면서 편리하게 이용할 수 있는 Windows 작업 전환 강화 도구입니다.",
      image: "/images/alttab-pro.png",
      features: ["탭 항목별 정리", "빠른 작업 전환", "다양한 기능"],
      filename: "CustomAltTabPro_v2.0(F).exe",
      icon: Zap,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="font-bold text-gray-900">App Hub</span>
          </div>
          <div className="text-sm text-gray-600">무료 PC 앱 배포</div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              여기서 무엇을 할 수 있을까?
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            생산성을 높이는 두 개의 강력한 PC 도구를 무료로 다운로드하세요.
            간단한 설치로 당신의 작업 환경을 한 단계 업그레이드하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#apps" className="inline-block">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8">
                앱 둘러보기
              </Button>
            </a>
            <a href="#apps" className="inline-block">
              <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8">
                자세히 알아보기
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section id="apps" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-display)" }}>
            추천 앱
          </h2>
          <p className="text-lg text-gray-600">
            당신의 생산성을 높이는 필수 도구들
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {apps.map((app) => {
            const IconComponent = app.icon;
            const isHovered = hoveredApp === app.id;

            return (
              <div
                key={app.id}
                onMouseEnter={() => setHoveredApp(app.id)}
                onMouseLeave={() => setHoveredApp(null)}
                className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-purple-300 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10 p-8">
                  {/* Icon and Title */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center mb-4 group-hover:from-blue-200 group-hover:to-purple-200 transition-colors">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "var(--font-display)" }}>
                        {app.name}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {app.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">주요 기능</h4>
                    <div className="flex flex-wrap gap-2">
                      {app.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full border border-blue-200 group-hover:bg-blue-100 group-hover:border-blue-300 transition-colors"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Screenshot Preview */}
                  <div className="mb-8 rounded-xl overflow-hidden border border-gray-200 group-hover:border-purple-300 transition-colors">
                    <img
                      src={app.image}
                      alt={app.name}
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  {/* Download Button */}
                  <a href={`#download-${app.id}`} className="block">
                    <Button
                      className={`w-full py-6 text-base font-semibold transition-all duration-300 ${
                        isHovered
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg"
                          : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                      }`}
                    >
                      <Download className="w-5 h-5 mr-2" />
                      {app.filename} 다운로드
                    </Button>
                  </a>

                  {/* File Info */}
                  <p className="text-xs text-gray-500 mt-4 text-center">
                    파일명: {app.filename}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
              왜 이 앱들을 선택해야 할까요?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "100% 무료",
                  description: "모든 기능을 무료로 사용할 수 있습니다",
                },
                {
                  title: "간단한 설치",
                  description: "몇 번의 클릭으로 바로 사용 시작",
                },
                {
                  title: "가벼운 성능",
                  description: "PC 성능에 영향을 주지 않습니다",
                },
              ].map((feature, idx) => (
                <div key={idx} className="text-center">
                  <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "var(--font-display)" }}>
                    {feature.title}
                  </h3>
                  <p className="text-blue-100">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center" style={{ fontFamily: "var(--font-display)" }}>
            자주 묻는 질문
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "앱을 설치하려면 관리자 권한이 필요한가요?",
                a: "네, 설치 시 관리자 권한이 필요합니다. Windows 보안 경고가 나타나면 '실행'을 클릭하세요.",
              },
              {
                q: "앱을 제거할 수 있나요?",
                a: "네, Windows 제어판의 프로그램 제거에서 앱을 선택하고 제거하면 됩니다.",
              },
              {
                q: "앱이 바이러스는 아닐까요?",
                a: "이 앱들은 안전한 개인 프로젝트입니다. 바이러스 검사를 통과했습니다.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all">
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                  {item.q}
                </h3>
                <p className="text-gray-600">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="font-bold text-white">App Hub</span>
            </div>
            <p className="text-sm mb-8">
              생산성을 높이는 무료 PC 앱 배포 플랫폼
            </p>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-sm text-center">
                © 2026 App Hub. 모든 권리 보유.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
