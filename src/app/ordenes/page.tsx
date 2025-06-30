'use client';
import { useState, useEffect } from 'react';
import { DetalleOrden } from '../../types/index';
import Link from 'next/link';
import { Plus, ClipboardList, Trash2, Package, TrendingUp, Hash, DollarSign, ShoppingBag } from 'lucide-react';
import api from '../../lib/api';
import toast from 'react-hot-toast';

export default function OrdenesPage() {
  const [ordenes, setOrdenes] = useState<DetalleOrden[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadOrdenes();
  }, []);

  const loadOrdenes = async () => {
    try {
      const response = await api.get('/detalle-orden-compra');
      setOrdenes(response.data);
    } catch (error) {
      toast.error('Error al cargar órdenes médicas: ' + error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (codOrdenCompra: number, codMedicamento: number) => {
    if (window.confirm('¿Confirma la eliminación de esta orden médica?')) {
      try {
        await api.delete(`/detalle-orden-compra/${codOrdenCompra}/${codMedicamento}`);
        toast.success('Orden médica eliminada del sistema');
        loadOrdenes();
      } catch (error) {
        toast.error('Error al eliminar orden: ' + error);
      }
    }
  };

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
          borderTop: '4px solid #059f69',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }}></div>
        <p style={{ color: '#475569', fontSize: '1.1rem', fontWeight: '500' }}>
          Cargando órdenes médicas...
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
          marginBottom: '3rem'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #059f69, #10b981)',
            width: '80px',
            height: '80px',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem',
            boxShadow: '0 10px 30px -5px rgba(5, 159, 105, 0.4)'
          }}>
            <ClipboardList size={40} color="white" />
          </div>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #059f69, #10b981)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            marginBottom: '1rem'
          }}>
            Gestión de Pedidos
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: '#475569',
            lineHeight: '1.6'
          }}>
            Sistema automatizado para órdenes médicas y suministros hospitalarios
          </p>
        </div>

        {/* Botón nueva orden */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <Link 
            href="/ordenes/nuevo" 
            style={{
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'linear-gradient(135deg, #059f69, #10b981)',
              color: 'white',
              padding: '14px 24px',
              borderRadius: '12px',
              fontSize: '1rem',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 25px -5px rgba(5, 159, 105, 0.4)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 30px -5px rgba(5, 159, 105, 0.5)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 25px -5px rgba(5, 159, 105, 0.4)';
            }}
          >
            <Plus size={18} />
            <span>Nueva Orden Médica</span>
          </Link>
        </div>

        {/* Lista de órdenes */}
        {ordenes.length === 0 ? (
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
              <ClipboardList size={48} color="#94a3b8" />
            </div>
            <h3 style={{ 
              fontSize: '1.75rem', 
              fontWeight: '600', 
              color: '#374151', 
              marginBottom: '1rem' 
            }}>
              No hay órdenes registradas
            </h3>
            <p style={{ 
              color: '#6b7280', 
              fontSize: '1.1rem',
              lineHeight: '1.5'
            }}>
              Registre la primera orden médica para comenzar
            </p>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {ordenes.map((orden) => (
              <div
                key={`${orden.CodOrdenCompra}-${orden.CodMedicamento}`}
                style={{
                  background: 'linear-gradient(145deg, #ffffff, #f8fafc)',
                  borderRadius: '20px',
                  padding: '2rem',
                  boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.08)',
                  border: '2px solid #e2e8f0',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Elemento decorativo */}
                <div style={{
                  position: 'absolute',
                  top: '-30px',
                  right: '-30px',
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #059f6920, #10b98120)',
                  borderRadius: '50%',
                  zIndex: 0
                }}></div>

                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'flex-start',
                  position: 'relative',
                  zIndex: 1
                }}>
                  <div style={{ flex: 1, marginRight: '1rem' }}>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '12px',
                      marginBottom: '1.5rem'
                    }}>
                      <div style={{
                        background: 'linear-gradient(135deg, #059f69, #10b981)',
                        padding: '10px',
                        borderRadius: '12px',
                        boxShadow: '0 6px 20px -5px rgba(5, 159, 105, 0.4)'
                      }}>
                        <Package size={24} color="white" />
                      </div>
                      <div>
                        <h3 style={{ 
                          fontSize: '1.3rem', 
                          fontWeight: '700',
                          marginBottom: '4px',
                          color: '#0f172a'
                        }}>
                          Orden #{orden.CodOrdenCompra}
                        </h3>
                        <p style={{ 
                          color: '#475569', 
                          fontSize: '0.9rem',
                          fontWeight: '500'
                        }}>
                          Medicamento #{orden.CodMedicamento}
                        </p>
                      </div>
                    </div>

                    {orden.descripcion && (
                      <div style={{
                        background: '#f8fafc',
                        padding: '12px 16px',
                        borderRadius: '12px',
                        border: '1px solid #e2e8f0',
                        marginBottom: '1.5rem'
                      }}>
                        <p style={{ 
                          color: '#374151', 
                          fontSize: '0.95rem',
                          lineHeight: '1.5',
                          margin: 0
                        }}>
                          {orden.descripcion}
                        </p>
                      </div>
                    )}

                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)',
                      gap: '1rem',
                      marginBottom: '1rem'
                    }}>
                      <div style={{
                        textAlign: 'center',
                        background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
                        padding: '12px 8px',
                        borderRadius: '12px',
                        border: '1px solid #bbf7d0'
                      }}>
                        <div style={{
                          fontSize: '1.5rem',
                          fontWeight: '700',
                          color: '#059f69',
                          marginBottom: '4px'
                        }}>
                          {Number(orden.cantidad) || 0}
                        </div>
                        <div style={{
                          fontSize: '0.8rem',
                          color: '#475569',
                          fontWeight: '500'
                        }}>
                          Cantidad
                        </div>
                      </div>
                      <div style={{
                        textAlign: 'center',
                        background: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)',
                        padding: '12px 8px',
                        borderRadius: '12px',
                        border: '1px solid #bae6fd'
                      }}>
                        <div style={{
                          fontSize: '1.2rem',
                          fontWeight: '700',
                          color: '#0f766e',
                          marginBottom: '4px'
                        }}>
                          S/ {Number(orden.precio) || 0}
                        </div>
                        <div style={{
                          fontSize: '0.8rem',
                          color: '#475569',
                          fontWeight: '500'
                        }}>
                          Precio Unit.
                        </div>
                      </div>
                      <div style={{
                        textAlign: 'center',
                        background: 'linear-gradient(135deg, #fef3c7, #fde68a)',
                        padding: '12px 8px',
                        borderRadius: '12px',
                        border: '1px solid #fcd34d'
                      }}>
                        <div style={{
                          fontSize: '1.2rem',
                          fontWeight: '700',
                          color: '#d97706',
                          marginBottom: '4px'
                        }}>
                          S/ {(Number(orden.montoPres) || (Number(orden.cantidad) * Number(orden.precio))).toFixed(2)}
                        </div>
                        <div style={{
                          fontSize: '0.8rem',
                          color: '#475569',
                          fontWeight: '500'
                        }}>
                          Total
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDelete(orden.CodOrdenCompra, orden.CodMedicamento)}
                    style={{
                      background: 'linear-gradient(135deg, #dc2626, #ef4444)',
                      color: 'white',
                      border: 'none',
                      padding: '12px',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 6px 20px -5px rgba(220, 38, 38, 0.4)',
                      position: 'relative',
                      zIndex: 1
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(220, 38, 38, 0.5)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 6px 20px -5px rgba(220, 38, 38, 0.4)';
                    }}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
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
            background: 'linear-gradient(135deg, #059f69, #10b981)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            marginBottom: '3rem'
          }}>
            Resumen de Pedidos
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
              <ClipboardList size={32} color="#0f766e" style={{ margin: '0 auto 1rem' }} />
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: '#0f766e',
                marginBottom: '0.5rem'
              }}>
                {ordenes.length}
              </div>
              <div style={{
                fontSize: '1rem',
                color: '#475569',
                fontWeight: '500'
              }}>
                Total de Órdenes
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
                {ordenes.reduce((sum, o) => sum + (Number(o.cantidad) || 0), 0)}
              </div>
              <div style={{
                fontSize: '1rem',
                color: '#475569',
                fontWeight: '500'
              }}>
                Items Solicitados
              </div>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #fffbeb, #fef3c7)',
              padding: '2rem',
              borderRadius: '16px',
              textAlign: 'center',
              border: '2px solid #fcd34d'
            }}>
              <DollarSign size={32} color="#d97706" style={{ margin: '0 auto 1rem' }} />
              <div style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#d97706',
                marginBottom: '0.5rem'
              }}>
                S/ {ordenes.reduce((sum, o) => {
                  const monto = Number(o.montoPres) || (Number(o.cantidad) * Number(o.precio));
                  return sum + (monto || 0);
                }, 0).toFixed(2)}
              </div>
              <div style={{
                fontSize: '1rem',
                color: '#475569',
                fontWeight: '500'
              }}>
                Valor Total
              </div>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #fef2f2, #fee2e2)',
              padding: '2rem',
              borderRadius: '16px',
              textAlign: 'center',
              border: '2px solid #fecaca'
            }}>
              <Hash size={32} color="#dc2626" style={{ margin: '0 auto 1rem' }} />
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: '#dc2626',
                marginBottom: '0.5rem'
              }}>
                {new Set(ordenes.map(o => o.CodOrdenCompra)).size}
              </div>
              <div style={{
                fontSize: '1rem',
                color: '#475569',
                fontWeight: '500'
              }}>
                Órdenes Únicas
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