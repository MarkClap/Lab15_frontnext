import Link from 'next/link';
import { Pill, ClipboardList, Activity, Cross, Shield, Users } from 'lucide-react';

export default function HomePage() {
  return (
    <div style={{ padding: '2rem 0', backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      {/* Hero Section */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '12px',
          background: 'linear-gradient(135deg, #0f766e, #0891b2)',
          color: 'white',
          padding: '16px 32px',
          borderRadius: '50px',
          fontSize: '1rem',
          fontWeight: '600',
          marginBottom: '2rem',
          boxShadow: '0 8px 25px -5px rgba(15, 118, 110, 0.3)'
        }}>
          <Cross size={24} />
          <span>Centro Médico Avanzado</span>
        </div>
        
        <h1 style={{
          fontSize: '3.5rem',
          fontWeight: '800',
          background: 'linear-gradient(135deg, #0f766e, #0891b2)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          marginBottom: '1rem',
          letterSpacing: '-0.02em'
        }}>
          HealthTech Pro
        </h1>
        
        <p style={{
          fontSize: '1.3rem',
          color: '#475569',
          maxWidth: '650px',
          margin: '0 auto',
          lineHeight: '1.7',
          fontWeight: '400'
        }}>
          Plataforma de gestión médica <strong style={{color: '#0f766e'}}>innovadora</strong> para hospitales modernos
        </p>
      </div>

      {/* Cards principales */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: '2.5rem',
        maxWidth: '1400px',
        margin: '0 auto 4rem',
        padding: '0 1.5rem'
      }}>
        <Link href="/medicamentos" style={{ textDecoration: 'none' }}>
          <div style={{
            background: 'linear-gradient(145deg, #ffffff, #f1f5f9)',
            borderRadius: '20px',
            padding: '2.5rem',
            boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.08)',
            border: '2px solid #e2e8f0',
            transition: 'all 0.4s ease',
            cursor: 'pointer',
            height: '100%',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '120px',
              height: '120px',
              background: 'linear-gradient(135deg, #0f766e20, #0891b220)',
              borderRadius: '50%',
              zIndex: 0
            }}></div>
            <div style={{
              background: 'linear-gradient(135deg, #0f766e, #0891b2)',
              width: '72px',
              height: '72px',
              borderRadius: '18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '2rem',
              boxShadow: '0 8px 25px -5px rgba(15, 118, 110, 0.4)',
              position: 'relative',
              zIndex: 1
            }}>
              <Pill size={36} color="white" />
            </div>
            <h3 style={{ 
              fontSize: '1.75rem', 
              fontWeight: '700', 
              marginBottom: '1rem',
              color: '#0f172a',
              position: 'relative',
              zIndex: 1
            }}>
              Farmacología Digital
            </h3>
            <p style={{ 
              color: '#475569', 
              marginBottom: '2rem',
              lineHeight: '1.6',
              fontSize: '1.05rem',
              position: 'relative',
              zIndex: 1
            }}>
              Control inteligente de medicamentos y suministros médicos con tecnología avanzada
            </p>
            <div style={{ 
              color: '#0f766e',
              fontWeight: '700',
              fontSize: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              position: 'relative',
              zIndex: 1
            }}>
              <span>Acceder ahora</span>
              <span style={{ fontSize: '1.2rem' }}>→</span>
            </div>
          </div>
        </Link>

        <Link href="/ordenes" style={{ textDecoration: 'none' }}>
          <div style={{
            background: 'linear-gradient(145deg, #ffffff, #f1f5f9)',
            borderRadius: '20px',
            padding: '2.5rem',
            boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.08)',
            border: '2px solid #e2e8f0',
            transition: 'all 0.4s ease',
            cursor: 'pointer',
            height: '100%',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '120px',
              height: '120px',
              background: 'linear-gradient(135deg, #059f6920, #10b98120)',
              borderRadius: '50%',
              zIndex: 0
            }}></div>
            <div style={{
              background: 'linear-gradient(135deg, #059f69, #10b981)',
              width: '72px',
              height: '72px',
              borderRadius: '18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '2rem',
              boxShadow: '0 8px 25px -5px rgba(5, 159, 105, 0.4)',
              position: 'relative',
              zIndex: 1
            }}>
              <ClipboardList size={36} color="white" />
            </div>
            <h3 style={{ 
              fontSize: '1.75rem', 
              fontWeight: '700', 
              marginBottom: '1rem',
              color: '#0f172a',
              position: 'relative',
              zIndex: 1
            }}>
              Gestión de Pedidos
            </h3>
            <p style={{ 
              color: '#475569', 
              marginBottom: '2rem',
              lineHeight: '1.6',
              fontSize: '1.05rem',
              position: 'relative',
              zIndex: 1
            }}>
              Sistema automatizado para órdenes médicas y suministros hospitalarios
            </p>
            <div style={{ 
              color: '#059f69',
              fontWeight: '700',
              fontSize: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              position: 'relative',
              zIndex: 1
            }}>
              <span>Ver pedidos</span>
              <span style={{ fontSize: '1.2rem' }}>→</span>
            </div>
          </div>
        </Link>

        <div style={{
          background: 'linear-gradient(145deg, #f8fafc, #e2e8f0)',
          borderRadius: '20px',
          padding: '2.5rem',
          boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.05)',
          border: '2px solid #e2e8f0',
          opacity: '0.8',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '120px',
            height: '120px',
            background: 'linear-gradient(135deg, #dc262620, #ef444420)',
            borderRadius: '50%',
            zIndex: 0
          }}></div>
          <div style={{
            background: 'linear-gradient(135deg, #dc2626, #ef4444)',
            width: '72px',
            height: '72px',
            borderRadius: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '2rem',
            boxShadow: '0 8px 25px -5px rgba(220, 38, 38, 0.4)',
            position: 'relative',
            zIndex: 1
          }}>
            <Activity size={36} color="white" />
          </div>
          <h3 style={{ 
            fontSize: '1.75rem', 
            fontWeight: '700', 
            marginBottom: '1rem',
            color: '#0f172a',
            position: 'relative',
            zIndex: 1
          }}>
            Analytics Médicos
          </h3>
          <p style={{ 
            color: '#475569', 
            marginBottom: '2rem',
            lineHeight: '1.6',
            fontSize: '1.05rem',
            position: 'relative',
            zIndex: 1
          }}>
            Reportes avanzados y análisis predictivo para toma de decisiones
          </p>
          <div style={{ 
            color: '#94a3b8',
            fontWeight: '700',
            fontSize: '1rem',
            position: 'relative',
            zIndex: 1
          }}>
            En desarrollo
          </div>
        </div>
      </div>

      {/* Sección características */}
      <div style={{
        background: 'linear-gradient(145deg, #ffffff, #f8fafc)',
        borderRadius: '24px',
        padding: '4rem 3rem',
        boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.1)',
        border: '2px solid #e2e8f0',
        maxWidth: '1400px',
        margin: '0 auto',
        marginLeft: '1.5rem',
        marginRight: '1.5rem'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '4rem',
          background: 'linear-gradient(135deg, #0f766e, #0891b2)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent'
        }}>
          Tecnología de Vanguardia
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '3rem'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              background: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)',
              width: '100px',
              height: '100px',
              borderRadius: '25px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 2rem',
              boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.2)'
            }}>
              <Shield size={40} color="#0f766e" />
            </div>
            <h3 style={{ 
              fontWeight: '700', 
              fontSize: '1.4rem', 
              marginBottom: '1rem',
              color: '#0f172a'
            }}>
              Máxima Seguridad
            </h3>
            <p style={{ color: '#475569', lineHeight: '1.6', fontSize: '1.05rem' }}>
              Encriptación de grado médico y cumplimiento total de normativas de salud
            </p>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <div style={{
              background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
              width: '100px',
              height: '100px',
              borderRadius: '25px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 2rem',
              boxShadow: '0 10px 25px -5px rgba(34, 197, 94, 0.2)'
            }}>
              <Users size={40} color="#059f69" />
            </div>
            <h3 style={{ 
              fontWeight: '700', 
              fontSize: '1.4rem', 
              marginBottom: '1rem',
              color: '#0f172a'
            }}>
              Colaboración Total
            </h3>
            <p style={{ color: '#475569', lineHeight: '1.6', fontSize: '1.05rem' }}>
              Acceso jerarquizado para todo el equipo médico con permisos personalizados
            </p>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <div style={{
              background: 'linear-gradient(135deg, #fef2f2, #fee2e2)',
              width: '100px',
              height: '100px',
              borderRadius: '25px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 2rem',
              boxShadow: '0 10px 25px -5px rgba(239, 68, 68, 0.2)'
            }}>
              <Activity size={40} color="#dc2626" />
            </div>
            <h3 style={{ 
              fontWeight: '700', 
              fontSize: '1.4rem', 
              marginBottom: '1rem',
              color: '#0f172a'
            }}>
              Monitoreo 24/7
            </h3>
            <p style={{ color: '#475569', lineHeight: '1.6', fontSize: '1.05rem' }}>
              Seguimiento continuo con alertas inteligentes y notificaciones automáticas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}