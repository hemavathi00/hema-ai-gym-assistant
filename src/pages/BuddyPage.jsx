import React, { useState } from 'react';

function BuddyPage() {
  const [messages, setMessages] = useState([
    { text: "Hi! I'm your Virtual Gym Buddy. Ready to crush some goals today?", isBot: true }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Add user message
    const newMessages = [...messages, { text: input, isBot: false }];
    setMessages(newMessages);
    setInput("");
    
    // Mock bot response with basic sentiment logic
    setTimeout(() => {
      let reply = "Consistency is key. What's the next exercise?";
      if (input.toLowerCase().includes("tired") || input.toLowerCase().includes("hard")) {
        reply = "I know it's tough, but diamonds are made under pressure! You got this!";
      } else if (input.toLowerCase().includes("easy") || input.toLowerCase().includes("done")) {
        reply = "Awesome work! That's the spirit. Keep pushing those limits!";
      }
      
      setMessages(msgs => [...msgs, { text: reply, isBot: true }]);
    }, 1000);
  };

  return (
    <div>
      <div className="page-header">
        <h1>Virtual Gym Buddy</h1>
        <p style={{ color: 'var(--text-muted)' }}>Conversational AI with sentiment analysis to keep you motivated.</p>
      </div>
      
      <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '600px' }}>
        <div style={{ flex: 1, overflowY: 'auto', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {messages.map((msg, idx) => (
            <div key={idx} style={{ 
              alignSelf: msg.isBot ? 'flex-start' : 'flex-end',
              background: msg.isBot ? 'rgba(255,255,255,0.1)' : 'var(--primary)',
              padding: '0.75rem 1rem',
              borderRadius: '1rem',
              maxWidth: '70%'
            }}>
              {msg.text}
            </div>
          ))}
        </div>
        
        <form onSubmit={handleSend} style={{ display: 'flex', gap: '1rem', marginTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..." 
            style={{ marginBottom: 0, flex: 1 }} 
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default BuddyPage;
