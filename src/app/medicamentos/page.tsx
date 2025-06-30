'use client';
import { useState, useEffect } from 'react';
import { Medicamento } from '@/types';
import MedicamentoCard from '@/components/MedicamentoCard';
import Link from 'next/link';
import { Plus, Search, Cross, Activity, TrendingUp, AlertTriangle, Package, DollarSign } from 'lucide-react';
import api from '@/lib/api';
import toast from 'react-hot-toast';

export default function MedicamentosPage() {
  const [medicamentos, setMedicamentos] = useState<Medicamento[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadMedicamentos();
  }, []);

  const loadMedicamentos = async () => {
    try {
      const response = await api.get('/medicamentos');
      setMedicamentos(response.data);
    } catch (error) {
      toast.error('Error al cargar el inventario médico: ' + error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await api.delete(`/medicamentos/${id}`);
      toast.success('Medicamento eliminado del sistema');
      loadMedicamentos();
    } catch (error) {
      toast.error('Error al eliminar medicamento: ' + error);
    }
  };

  const filteredMedicamentos = medicamentos.filter(med =>
    med.descripcionMed.toLowerCase().includes(searchTerm.toLowerCase()) ||
    med.Marca?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '60vh',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <div style={{
          width: '60px',
          height: '60px',
          border: '4px solid #e2e8f0',
          borderTop: '4px solid #0f766e',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }}></div>
        <p style={{ color: '#475569', fontSize: '1.1rem', fontWeight: '500' }}>
          Cargando inventario médico...
        </p>
      </div>
    );
  }

  return (
    <div style={{ 
      padding: '2rem 0', 
      backgroundColor: '#f8fafc', 
      minHeight: '100vh' 
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 1.5rem'
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem',
          position: 'relative'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #0f766e, #0891b2)',
            width: '80px',
            height: '80px',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem',
            boxShadow: '0 10px 30px -5px rgba(15, 118, 110, 0.4)'
          }}>
            <Cross size={40} color="white" />
          </div>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #0f766e, #0891b2)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            marginBottom: '1rem'
          }}>
            Farmacología Digital
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: '#475569',
            lineHeight: '1.6'
          }}>
            Control inteligente del inventario de medicamentos y suministros médicos
          </p>
        </div>

        {/* Barra de búsqueda y botón nuevo */}
        <div style={{ 
          display: 'flex', 
          gap: '1.5rem', 
          alignItems: 'center',
          marginBottom: '3rem',
          flexWrap: 'wrap',
          justifyContent: 'space-between'
        }}>
          <div style={{
            position: 'relative',
            flex: '1',
            minWidth: '300px',
            maxWidth: '500px'
          }}>
            <Search 
              size={20} 
              color="#475569"
              style={{
                position: 'absolute',
                left: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 1
              }}
            />
            <input
              type="text"
              placeholder="Buscar por nombre o laboratorio..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '14px 18px 14px 50px',
                border: '2px solid #e2e8f0',
                borderRadius: '12px',
                fontSize: '1rem',
                background: '#ffffff',
                transition: 'all 0.3s ease',
                outline: 'none'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#0f766e';
                e.target.style.boxShadow = '0 0 0 3px rgba(15, 118, 110, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#e2e8f0';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>
          
          <Link 
            href="/medicamentos/nuevo" 
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'linear-gradient(135deg, #0f766e, #0891b2)',
              color: 'white',
              padding: '14px 24px',
              borderRadius: '12px',
              fontSize: '1rem',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 25px -5px rgba(15, 118, 110, 0.4)',
              whiteSpace: 'nowrap'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 30px -5px rgba(15, 118, 110, 0.5)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 25px -5px rgba(15, 118, 110, 0.4)';
            }}
          >
            <Plus size={18} />
            <span>Registrar Medicamento</span>
          </Link>
        </div>

        {/* Lista de medicamentos */}
        {filteredMedicamentos.length === 0 ? (
          <div style={{
            background: 'linear-gradient(145deg, #ffffff, #f8fafc)',
            borderRadius: '20px',
            padding: '4rem 2rem',
            textAlign: 'center',
            boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.08)',
            border: '2px solid #e2e8f0',
            marginBottom: '3rem'
          }}>
            <div style={{
              background: '#f1f5f9',
              width: '100px',
              height: '100px',
              borderRadius: '25px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 2rem'
            }}>
              <Cross size={48} color="#94a3b8" />
            </div>
            <h3 style={{ 
              fontSize: '1.75rem', 
              fontWeight: '600', 
              color: '#374151', 
              marginBottom: '1rem' 
            }}>
              {searchTerm ? 'No se encontraron medicamentos' : 'Inventario vacío'}
            </h3>
            <p style={{ 
              color: '#6b7280', 
              fontSize: '1.1rem',
              lineHeight: '1.5'
            }}>
              {searchTerm 
                ? 'Intenta modificar los términos de búsqueda' 
                : 'Registra el primer medicamento para comenzar'
              }
            </p>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {filteredMedicamentos.map((medicamento) => (
              <MedicamentoCard
                key={medicamento.CodMedicamento}
                medicamento={medicamento}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}

        {/* Dashboard de estadísticas */}
        <div style={{
          background: 'linear-gradient(145deg, #ffffff, #f8fafc)',
          borderRadius: '24px',
          padding: '3rem',
          boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.1)',
          border: '2px solid #e2e8f0'
        }}>
          <h3 style={{
            textAlign: 'center',
            fontSize: '2rem',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #0f766e, #0891b2)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            marginBottom: '3rem'
          }}>
            Dashboard del Inventario
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)',
              padding: '2rem',
              borderRadius: '16px',
              textAlign: 'center',
              border: '2px solid #bae6fd'
            }}>
              <Package size={32} color="#0f766e" style={{ margin: '0 auto 1rem' }} />
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: '#0f766e',
                marginBottom: '0.5rem'
              }}>
                {medicamentos.length}
              </div>
              <div style={{
                fontSize: '1rem',
                color: '#475569',
                fontWeight: '500'
              }}>
                Total de Medicamentos
              </div>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
              padding: '2rem',
              borderRadius: '16px',
              textAlign: 'center',
              border: '2px solid #bbf7d0'
            }}>
              <TrendingUp size={32} color="#059f69" style={{ margin: '0 auto 1rem' }} />
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: '#059f69',
                marginBottom: '0.5rem'
              }}>
                {medicamentos.filter(m => Number(m.stock) > 20).length}
              </div>
              <div style={{
                fontSize: '1rem',
                color: '#475569',
                fontWeight: '500'
              }}>
                Stock Disponible
              </div>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #fffbeb, #fef3c7)',
              padding: '2rem',
              borderRadius: '16px',
              textAlign: 'center',
              border: '2px solid #fed7aa'
            }}>
              <AlertTriangle size={32} color="#d97706" style={{ margin: '0 auto 1rem' }} />
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: '#d97706',
                marginBottom: '0.5rem'
              }}>
                {medicamentos.filter(m => Number(m.stock) <= 5).length}
              </div>
              <div style={{
                fontSize: '1rem',
                color: '#475569',
                fontWeight: '500'
              }}>
                Stock Crítico
              </div>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
              padding: '2rem',
              borderRadius: '16px',
              textAlign: 'center',
              border: '2px solid #bbf7d0'
            }}>
              <DollarSign size={32} color="#059f69" style={{ margin: '0 auto 1rem' }} />
              <div style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#059f69',
                marginBottom: '0.5rem'
              }}>
                S/ {medicamentos.reduce((sum, m) => {
                  const precio = Number(m.precioVentaUni) || 0;
                  const stock = Number(m.stock) || 0;
                  return sum + (precio * stock);
                }, 0).toFixed(2)}
              </div>
              <div style={{
                fontSize: '1rem',
                color: '#475569',
                fontWeight: '500'
              }}>
                Valor del Inventario
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}