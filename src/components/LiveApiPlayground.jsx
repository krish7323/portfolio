import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Check, Copy, Terminal, Zap, ShieldCheck, Database, RefreshCw } from 'lucide-react';
import TiltCard from './TiltCard';

const endpoints = [
  {
    id: 'razorpay',
    name: 'Razorpay Payment Order',
    method: 'POST',
    path: '/api/v1/payments/razorpay/create-order',
    project: 'Viz Travels',
    requestPayload: {
      bookingId: 'BK_9824_JT',
      amount: 450000, // in paise = ₹4500
      currency: 'INR',
      userEmail: 'client@example.com',
      vendorId: 'VEND_GOA_01'
    },
    responsePayload: {
      status: 'success',
      statusCode: 200,
      latency: '34ms',
      data: {
        orderId: 'order_Nx8Yq309ZkP1',
        amount: 450000,
        currency: 'INR',
        signatureVerified: true,
        webhookStatus: 'ORDER_PAID',
        receipt: 'rcpt_viz_7823'
      }
    }
  },
  {
    id: 'otp',
    name: '10-Digit OTP Authentication',
    method: 'POST',
    path: '/api/v1/auth/verify-otp',
    project: 'Fluencer App',
    requestPayload: {
      phone: '+917323000894',
      otp: '732300',
      clientPlatform: 'React Native / iOS & Android'
    },
    responsePayload: {
      status: 'success',
      statusCode: 200,
      latency: '28ms',
      data: {
        authenticated: true,
        user: {
          id: 'usr_fluencer_4491',
          role: 'CREATOR_PRO',
          campaignsCount: 14,
          jwtToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
        }
      }
    }
  },
  {
    id: 'trade',
    name: 'Real-Time Portfolio Execution',
    method: 'GET',
    path: '/api/v1/trading/positions/live',
    project: 'MirrorTrade',
    requestPayload: {
      accountId: 'ACC_MT_8892',
      strategy: 'MOMENTUM_ALPHA_V2',
      riskTier: 'STRICT_MAX_2_PCT'
    },
    responsePayload: {
      status: 'success',
      statusCode: 200,
      latency: '19ms',
      data: {
        positionsActive: 4,
        dailyPnL: '+8.42%',
        totalPortfolioValueINR: 840250.00,
        mirroredOrders: [
          { symbol: 'NIFTY50_CE', action: 'BUY', qty: 150, pnl: '+₹14,200' },
          { symbol: 'BANKNIFTY_PE', action: 'HEDGE', qty: 75, pnl: '+₹6,800' }
        ]
      }
    }
  }
];

export default function LiveApiPlayground() {
  const [selectedEndpoint, setSelectedEndpoint] = useState(endpoints[0]);
  const [isRunning, setIsRunning] = useState(false);
  const [response, setResponse] = useState(selectedEndpoint.responsePayload);
  const [copied, setCopied] = useState(false);

  const handleRun = () => {
    setIsRunning(true);
    setTimeout(() => {
      setResponse(selectedEndpoint.responsePayload);
      setIsRunning(false);
    }, 450);
  };

  const handleSelect = (ep) => {
    setSelectedEndpoint(ep);
    setResponse(ep.responsePayload);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(response, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <TiltCard maxTilt={3} scale={1.01} className="w-full">
      <div className="w-full bg-[#0d101d] border border-zinc-700/70 rounded-2xl p-5 sm:p-7 shadow-2xl space-y-6">
        
        {/* Terminal Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800/80 pb-5">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span>Interactive REST API Explorer</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  LIVE RUNNER
                </span>
              </h3>
              <p className="text-xs text-zinc-400 mt-0.5">
                Test production backend endpoints engineered by Krishna Chandra Jha.
              </p>
            </div>
          </div>

          {/* Action Trigger */}
          <button
            onClick={handleRun}
            disabled={isRunning}
            data-cursor="Run API"
            className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all active:scale-95 disabled:opacity-50"
          >
            {isRunning ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Executing Request...</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" />
                <span>Execute Request</span>
              </>
            )}
          </button>
        </div>

        {/* Endpoint Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {endpoints.map((ep) => {
            const isSelected = selectedEndpoint.id === ep.id;
            return (
              <button
                key={ep.id}
                onClick={() => handleSelect(ep)}
                className={`p-3 rounded-xl text-left border transition-all ${
                  isSelected
                    ? 'bg-zinc-800/90 border-emerald-500/60 shadow-md'
                    : 'bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800/40'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[10px] font-mono font-black px-1.5 py-0.5 rounded ${
                    ep.method === 'POST' ? 'bg-indigo-500/20 text-indigo-300' : 'bg-emerald-500/20 text-emerald-300'
                  }`}>
                    {ep.method}
                  </span>
                  <span className="text-[10px] text-zinc-400 font-mono">{ep.project}</span>
                </div>
                <div className="text-xs font-bold text-white truncate">{ep.name}</div>
              </button>
            );
          })}
        </div>

        {/* Request & Response Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          
          {/* Request Box */}
          <div className="bg-[#080a14] border border-zinc-800/90 rounded-xl p-4 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400 border-b border-zinc-800/70 pb-2">
              <span className="text-emerald-400 font-bold">HTTP Request Payload</span>
              <span>{selectedEndpoint.path}</span>
            </div>
            <pre className="font-mono text-xs text-zinc-300 overflow-x-auto p-1 leading-relaxed max-h-48">
              <code>{JSON.stringify(selectedEndpoint.requestPayload, null, 2)}</code>
            </pre>
          </div>

          {/* Response Box */}
          <div className="bg-[#080a14] border border-zinc-800/90 rounded-xl p-4 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400 border-b border-zinc-800/70 pb-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white font-bold">Response: 200 OK</span>
                <span className="text-[10px] text-zinc-500">({selectedEndpoint.responsePayload.latency})</span>
              </div>
              <button
                onClick={handleCopy}
                className="text-[11px] font-mono text-zinc-400 hover:text-white flex items-center gap-1"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <pre className="font-mono text-xs text-emerald-300/90 overflow-x-auto p-1 leading-relaxed max-h-48">
              <code>{JSON.stringify(response, null, 2)}</code>
            </pre>
          </div>

        </div>

      </div>
    </TiltCard>
  );
}
