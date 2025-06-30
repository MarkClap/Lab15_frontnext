'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Pill, ClipboardList, Cross, Activity } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav style={{
      background: 'linear-gradient(135deg, #ffffff, #f8fafc)',
      borderBottom: '2px solid #e2e8f0',
      boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 50
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '80px'
      }}>
        <Link href="/" style={{ 
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          transition: 'all 0.3s ease'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #0f766e, #0891b2)',
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 25px -5px rgba(15, 118, 110, 0.4)'
          }}>
            <Cross size={24} color="white" />
          </div>
          <div style={{
            fontSize: '1.75rem',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #0f766e, #0891b2)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            letterSpacing: '-0.01em',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            HealthTech Pro
            <Activity size={20} style={{ color: '#0f766e' }} />
          </div>
        </Link>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: '#f8fafc',
          padding: '8px',
          borderRadius: '16px',
          border: '2px solid #e2e8f0'
        }}>
          <Link
            href="/"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 20px',
              borderRadius: '12px',
              fontSize: '0.95rem',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              color: pathname === '/' ? 'white' : '#475569',
              background: pathname === '/' 
                ? 'linear-gradient(135deg, #0f766e, #0891b2)' 
                : 'transparent',
              boxShadow: pathname === '/' 
                ? '0 6px 20px -5px rgba(15, 118, 110, 0.4)' 
                : 'none'
            }}
          >
            <Home size={18} />
            <span>Inicio</span>
          </Link>

          <Link
            href="/medicamentos"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 20px',
              borderRadius: '12px',
              fontSize: '0.95rem',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              color: pathname.startsWith('/medicamentos') ? 'white' : '#475569',
              background: pathname.startsWith('/medicamentos')
                ? 'linear-gradient(135deg, #0f766e, #0891b2)' 
                : 'transparent',
              boxShadow: pathname.startsWith('/medicamentos')
                ? '0 6px 20px -5px rgba(15, 118, 110, 0.4)' 
                : 'none'
            }}
          >
            <Pill size={18} />
            <span>Farmacología</span>
          </Link>

          <Link
            href="/ordenes"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 20px',
              borderRadius: '12px',
              fontSize: '0.95rem',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              color: pathname.startsWith('/ordenes') ? 'white' : '#475569',
              background: pathname.startsWith('/ordenes')
                ? 'linear-gradient(135deg, #059f69, #10b981)' 
                : 'transparent',
              boxShadow: pathname.startsWith('/ordenes')
                ? '0 6px 20px -5px rgba(5, 159, 105, 0.4)' 
                : 'none'
            }}
          >
            <ClipboardList size={18} />
            <span>Pedidos</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}