'use client';

import { useEffect, useState } from 'react';

export default function MessageSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay to let the heart animation start first
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 md:px-6 py-20 relative z-20 pb-40">
      {/* Main Heading */}
      <div
        className={`mb-16 text-center ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
        style={{ animationDelay: isVisible ? '0.2s' : '0s' }}
      >
        <h1 className="text-5xl md:text-7xl font-light text-primary text-balance leading-tight">
          كل عام وأنتِ بطلة حكايتي
        </h1>
      </div>

      {/* Message Content */}
      <div
        className={`max-w-3xl space-y-8 w-full ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
        style={{ animationDelay: isVisible ? '0.5s' : '0s' }}
      >
        {/* Message Box 1 */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 hover:bg-white/8 transition-all duration-300 hover:border-primary/30">
          <p className="text-lg md:text-xl text-foreground leading-relaxed font-light text-right">
            في كل يوم أحتفل بكِ، بابتسامتكِ التي تنير ظلامي، وبحنانكِ الذي يلمس قلبي بكل لطف وعمق. أنتِ لستِ مجرد جزء من حياتي، بل أنتِ الحكاية التي أحب أن أرويها كل يوم.
          </p>
        </div>

        {/* Message Box 2 */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 hover:bg-white/8 transition-all duration-300 hover:border-primary/30">
          <p className="text-lg md:text-xl text-foreground leading-relaxed font-light text-right">
            شكراً لكِ على كل اللحظات الجميلة التي أمضيناها معاً، على كل قهقهة، وعلى كل نظرة حانية. أنتِ تجعلين من الحياة أكثر جمالاً وألواناً.
          </p>
        </div>

        {/* Message Box 3 */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 hover:bg-white/8 transition-all duration-300 hover:border-primary/30">
          <p className="text-lg md:text-xl text-foreground leading-relaxed font-light text-right">
            كل عام وأنتِ بطلة حكايتي، بطلة قلبي، بطلة كل الأحلام الجميلة التي أحلم بها. أتمنى لكِ عاماً مليئاً بالفرح والحب والإنجازات التي تستحقينها.
          </p>
        </div>

        {/* Closing */}
        <div className="text-center pt-8">
          <p className="text-primary text-4xl font-light">♥</p>
        </div>
      </div>
    </div>
  );
}
