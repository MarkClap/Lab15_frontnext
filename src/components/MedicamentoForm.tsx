'use client';
import { useState } from 'react';
import { Medicamento } from '../types/index'; // Adjust the import path as necessary
import { Save, X, Pill, Cross } from 'lucide-react';

interface Props {
  medicamento?: Medicamento;
  onSubmit: (data: Medicamento) => void;
  onCancel: () => void;
  isEditing?: boolean;
}

export default function MedicamentoForm({ medicamento, onSubmit, onCancel, isEditing = false }: Props) {
  const [formData, setFormData] = useState<Medicamento>({
    descripcionMed: medicamento?.descripcionMed || '',
    fechaFabricacion: medicamento?.fechaFabricacion || '',
    fechaVencimiento: medicamento?.fechaVencimiento || '',
    Presentacion: medicamento?.Presentacion || '',
    stock: medicamento?.stock || 0,
    precioVentaUni: medicamento?.precioVentaUni || 0,
    precioVentaPres: medicamento?.precioVentaPres || 0,
    Marca: medicamento?.Marca || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
            background: 'linear-gradient(135deg, #0f766e20, #0891b220)',
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
              {isEditing ? 'Actualizar Medicamento' : 'Registrar Medicamento'}
            </h1>
            <p style={{
              fontSize: '1.1rem',
              color: '#475569',
              lineHeight: '1.6'
            }}>
              {isEditing 
                ? 'Modifique los datos del medicamento según sea necesario' 
                : 'Complete la información del nuevo medicamento para el inventario'
              }
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{ position: 'relative', zIndex: 1 }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              marginBottom: '3rem'
            }}>
              <div style={{ gridColumn: 'span 2' }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '0.5rem'
                }}>
                  Nombre del Medicamento *
                </label>
                <input
                  type="text"
                  name="descripcionMed"
                  value={formData.descripcionMed}
                  onChange={handleChange}
                  required
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
                  onFocus={(e) => e.target.style.borderColor = '#0f766e'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                  placeholder="Ej: Paracetamol 500mg"
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
                  Laboratorio / Marca
                </label>
                <input
                  type="text"
                  name="Marca"
                  value={formData.Marca}
                  onChange={handleChange}
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
                  onFocus={(e) => e.target.style.borderColor = '#0f766e'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                  placeholder="Ej: Bayer, Pfizer"
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
                  Presentación
                </label>
                <input
                  type="text"
                  name="Presentacion"
                  value={formData.Presentacion}
                  onChange={handleChange}
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
                  onFocus={(e) => e.target.style.borderColor = '#0f766e'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                  placeholder="Ej: Tabletas, Jarabe, Cápsulas"
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
                  Cantidad en Stock *
                </label>
                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleChange}
                  required
                  min="0"
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
                  onFocus={(e) => e.target.style.borderColor = '#0f766e'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                  placeholder="100"
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
                <input
                  type="number"
                  name="precioVentaUni"
                  value={formData.precioVentaUni}
                  onChange={handleChange}
                  required
                  step="0.01"
                  min="0"
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
                  onFocus={(e) => e.target.style.borderColor = '#0f766e'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                  placeholder="5.50"
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
                  Precio por Presentación
                </label>
                <input
                  type="number"
                  name="precioVentaPres"
                  value={formData.precioVentaPres}
                  onChange={handleChange}
                  step="0.01"
                  min="0"
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
                  onFocus={(e) => e.target.style.borderColor = '#0f766e'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                  placeholder="165.00"
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
                  Fecha de Fabricación
                </label>
                <input
                  type="date"
                  name="fechaFabricacion"
                  value={formData.fechaFabricacion}
                  onChange={handleChange}
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
                  onFocus={(e) => e.target.style.borderColor = '#0f766e'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
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
                  Fecha de Vencimiento
                </label>
                <input
                  type="date"
                  name="fechaVencimiento"
                  value={formData.fechaVencimiento}
                  onChange={handleChange}
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
                  onFocus={(e) => e.target.style.borderColor = '#0f766e'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                />
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
                  background: 'linear-gradient(135deg, #0f766e, #0891b2)',
                  color: 'white',
                  border: 'none',
                  padding: '14px 24px',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 25px -5px rgba(15, 118, 110, 0.4)',
                  minWidth: '140px',
                  justifyContent: 'center'
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
                <Save size={18} />
                <span>{isEditing ? 'Actualizar' : 'Registrar'}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}