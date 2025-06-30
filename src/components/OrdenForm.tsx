'use client';
import { useState } from 'react';
import { DetalleOrden } from '../types/index'; // Adjust the import path as necessary
import { Save, X, ClipboardList, Cross } from 'lucide-react';

interface Props {
  onSubmit: (data: DetalleOrden) => void;
  onCancel: () => void;
}

export default function OrdenForm({ onSubmit, onCancel }: Props) {
  const [formData, setFormData] = useState<DetalleOrden>({
    CodOrdenCompra: 0,
    CodMedicamento: 0,
    descripcion: '',
    cantidad: 0,
    precio: 0,
    montoPres: 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? parseFloat(value) || 0 : value
    }));
  };

  return (
    <div style={{
      padding: '2rem 0',
      backgroundColor: '#f8fafc',
      minHeight: '100vh'
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '0 1.5rem'
      }}>
        <div style={{
          background: 'linear-gradient(145deg, #ffffff, #f8fafc)',
          borderRadius: '24px',
          padding: '3rem',
          boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.1)',
          border: '2px solid #e2e8f0',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Elemento decorativo */}
          <div style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '200px',
            height: '200px',
            background: 'linear-gradient(135deg, #059f6920, #10b98120)',
            borderRadius: '50%',
            zIndex: 0
          }}></div>

          {/* Header del formulario */}
          <div style={{
            textAlign: 'center',
            marginBottom: '3rem',
            position: 'relative',
            zIndex: 1
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
              Nueva Orden Médica
            </h1>
            <p style={{
              fontSize: '1.1rem',
              color: '#475569',
              lineHeight: '1.6'
            }}>
              Registre los detalles del pedido de suministros médicos
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{ position: 'relative', zIndex: 1 }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              marginBottom: '3rem'
            }}>
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '0.5rem'
                }}>
                  Número de Orden *
                </label>
                <input
                  type="number"
                  name="CodOrdenCompra"
                  value={formData.CodOrdenCompra}
                  onChange={handleChange}
                  required
                  min="1"
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    background: '#ffffff',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#059f69'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                  placeholder="Ej: 1001"
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '0.5rem'
                }}>
                  Código de Medicamento *
                </label>
                <input
                  type="number"
                  name="CodMedicamento"
                  value={formData.CodMedicamento}
                  onChange={handleChange}
                  required
                  min="1"
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    background: '#ffffff',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#059f69'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                  placeholder="Ej: 1"
                />
              </div>

              <div style={{ gridColumn: '1 / -1' }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '0.5rem'
                }}>
                  Descripción del Pedido
                </label>
                <textarea
                  name="descripcion"
                  value={formData.descripcion}
                  onChange={handleChange}
                  rows={3}
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    background: '#ffffff',
                    transition: 'all 0.3s ease',
                    outline: 'none',
                    resize: 'vertical',
                    minHeight: '100px'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#059f69'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                  placeholder="Detalles adicionales del medicamento o suministro médico..."
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '0.5rem'
                }}>
                  Cantidad Solicitada *
                </label>
                <input
                  type="number"
                  name="cantidad"
                  value={formData.cantidad}
                  onChange={handleChange}
                  required
                  min="1"
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    background: '#ffffff',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#059f69'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                  placeholder="50"
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '0.5rem'
                }}>
                  Precio por Unidad *
                </label>
                <div style={{ position: 'relative' }}>
                  <span style={{
                    position: 'absolute',
                    left: '18px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#059f69',
                    fontWeight: '600',
                    fontSize: '1rem'
                  }}>
                    S/
                  </span>
                  <input
                    type="number"
                    name="precio"
                    value={formData.precio}
                    onChange={handleChange}
                    required
                    step="0.01"
                    min="0"
                    style={{
                      width: '100%',
                      padding: '14px 18px 14px 45px',
                      border: '2px solid #e2e8f0',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      background: '#ffffff',
                      transition: 'all 0.3s ease',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#059f69'}
                    onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                    placeholder="5.50"
                  />
                </div>
              </div>

              <div style={{ gridColumn: '1 / -1' }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '0.5rem'
                }}>
                  Monto Total de la Presentación
                </label>
                <div style={{ position: 'relative' }}>
                  <span style={{
                    position: 'absolute',
                    left: '18px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#059f69',
                    fontWeight: '600',
                    fontSize: '1rem'
                  }}>
                    S/
                  </span>
                  <input
                    type="number"
                    name="montoPres"
                    value={formData.montoPres}
                    onChange={handleChange}
                    step="0.01"
                    min="0"
                    style={{
                      width: '100%',
                      padding: '14px 18px 14px 45px',
                      border: '2px solid #e2e8f0',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      background: '#ffffff',
                      transition: 'all 0.3s ease',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#059f69'}
                    onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                    placeholder="275.00"
                  />
                </div>
                <p style={{
                  fontSize: '0.85rem',
                  color: '#6b7280',
                  marginTop: '0.5rem',
                  fontStyle: 'italic'
                }}>
                  Monto calculado: S/ {(formData.cantidad * formData.precio).toFixed(2)}
                </p>
              </div>
            </div>

            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <button
                type="button"
                onClick={onCancel}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#f8fafc',
                  color: '#475569',
                  border: '2px solid #e2e8f0',
                  padding: '14px 24px',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  minWidth: '140px',
                  justifyContent: 'center'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = '#e2e8f0';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = '#f8fafc';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <X size={18} />
                <span>Cancelar</span>
              </button>
              
              <button
                type="submit"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'linear-gradient(135deg, #059f69, #10b981)',
                  color: 'white',
                  border: 'none',
                  padding: '14px 24px',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 25px -5px rgba(5, 159, 105, 0.4)',
                  minWidth: '140px',
                  justifyContent: 'center'
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
                <Save size={18} />
                <span>Registrar Orden</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}