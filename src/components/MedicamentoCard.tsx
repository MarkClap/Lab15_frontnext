'use client';
import { Medicamento } from '@/types';
import { Trash2, Calendar, Package, DollarSign, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

interface Props {
  medicamento: Medicamento;
  onDelete: (id: number) => void;
}

export default function MedicamentoCard({ medicamento, onDelete }: Props) {
  const handleDelete = () => {
    if (window.confirm('¿Confirma la eliminación de este medicamento del sistema?')) {
      onDelete(medicamento.CodMedicamento!);
    }
  };

  const getStockStatus = () => {
    if (medicamento.stock > 20) {
      return { 
        text: 'Stock Disponible', 
        icon: CheckCircle,
        color: '#059f69',
        bgColor: '#f0fdf4',
        borderColor: '#bbf7d0'
      };
    } else if (medicamento.stock > 5) {
      return { 
        text: 'Stock Bajo', 
        icon: AlertTriangle,
        color: '#d97706',
        bgColor: '#fffbeb',
        borderColor: '#fed7aa'
      };
    } else {
      return { 
        text: 'Sin Stock', 
        icon: XCircle,
        color: '#dc2626',
        bgColor: '#fef2f2',
        borderColor: '#fecaca'
      };
    }
  };

  const stockStatus = getStockStatus();
  const StockIcon = stockStatus.icon;

  return (
    <div style={{
      background: 'linear-gradient(145deg, #ffffff, #f8fafc)',
      borderRadius: '20px',
      padding: '2rem',
      boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.08)',
      border: '2px solid #e2e8f0',
      transition: 'all 0.4s ease',
      position: 'relative',
      overflow: 'hidden',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Elemento decorativo */}
      <div style={{
        position: 'absolute',
        top: '-30px',
        right: '-30px',
        width: '80px',
        height: '80px',
        background: 'linear-gradient(135deg, #0f766e20, #0891b220)',
        borderRadius: '50%',
        zIndex: 0
      }}></div>

      {/* Header con información principal */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'flex-start',
        marginBottom: '1.5rem',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ flex: 1, marginRight: '1rem' }}>
          <h3 style={{ 
            fontSize: '1.4rem', 
            fontWeight: '700', 
            color: '#0f172a',
            marginBottom: '0.5rem',
            lineHeight: '1.3'
          }}>
            {medicamento.descripcionMed}
          </h3>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            color: '#475569',
            fontSize: '0.95rem',
            fontWeight: '500'
          }}>
            <Package size={18} color="#0f766e" />
            <span>Unidades: {medicamento.stock}</span>
          </div>
        </div>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          background: stockStatus.bgColor,
          color: stockStatus.color,
          padding: '8px 14px',
          borderRadius: '25px',
          fontSize: '0.85rem',
          fontWeight: '600',
          border: `2px solid ${stockStatus.borderColor}`,
          boxShadow: `0 4px 15px -3px ${stockStatus.color}20`
        }}>
          <StockIcon size={16} />
          <span>{stockStatus.text}</span>
        </div>
      </div>

      {/* Información detallada */}
      <div style={{ 
        marginBottom: '2rem', 
        flex: 1,
        position: 'relative',
        zIndex: 1
      }}>
        {medicamento.Marca && (
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            marginBottom: '1rem'
          }}>
            <span style={{ 
              fontWeight: '600', 
              color: '#374151',
              fontSize: '0.9rem',
              minWidth: '80px'
            }}>
              Marca:
            </span>
            <span style={{
              background: 'linear-gradient(135deg, #f1f5f9, #e2e8f0)',
              padding: '6px 16px',
              borderRadius: '12px',
              fontSize: '0.85rem',
              color: '#475569',
              fontWeight: '500',
              border: '1px solid #e2e8f0'
            }}>
              {medicamento.Marca}
            </span>
          </div>
        )}
        
        {medicamento.Presentacion && (
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            marginBottom: '1.5rem'
          }}>
            <span style={{ 
              fontWeight: '600', 
              color: '#374151',
              fontSize: '0.9rem',
              minWidth: '80px'
            }}>
              Formato:
            </span>
            <span style={{
              background: 'linear-gradient(135deg, #f1f5f9, #e2e8f0)',
              padding: '6px 16px',
              borderRadius: '12px',
              fontSize: '0.85rem',
              color: '#475569',
              fontWeight: '500',
              border: '1px solid #e2e8f0'
            }}>
              {medicamento.Presentacion}
            </span>
          </div>
        )}

        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '10px',
          marginBottom: '1.5rem',
          background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
          padding: '12px 16px',
          borderRadius: '15px',
          border: '2px solid #bbf7d0'
        }}>
          <DollarSign size={20} color="#059f69" />
          <span style={{ 
            fontWeight: '700', 
            fontSize: '1.3rem',
            color: '#059f69'
          }}>
            S/ {medicamento.precioVentaUni}
          </span>
          <span style={{
            fontSize: '0.8rem',
            color: '#059f69',
            fontWeight: '500'
          }}>
            por unidad
          </span>
        </div>

        {medicamento.fechaVencimiento && (
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px',
            color: '#475569',
            fontSize: '0.9rem',
            background: '#f8fafc',
            padding: '10px 14px',
            borderRadius: '12px',
            border: '1px solid #e2e8f0'
          }}>
            <Calendar size={16} color="#0f766e" />
            <span style={{ fontWeight: '500' }}>
              Vencimiento: {new Date(medicamento.fechaVencimiento).toLocaleDateString('es-ES')}
            </span>
          </div>
        )}
      </div>

      {/* Botón de acción */}
      <div style={{ 
        position: 'relative',
        zIndex: 1
      }}>
        <button
          onClick={handleDelete}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'linear-gradient(135deg, #dc2626, #ef4444)',
            color: 'white',
            border: 'none',
            padding: '12px 20px',
            borderRadius: '12px',
            fontSize: '0.9rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 6px 20px -5px rgba(220, 38, 38, 0.4)',
            width: '100%',
            justifyContent: 'center'
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
          <Trash2 size={16} />
          <span>Eliminar Medicamento</span>
        </button>
      </div>
    </div>
  );
}