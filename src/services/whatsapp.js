const PHONE = '244922646414'

export function createWhatsAppLink(items, total) {
  const lines = [
    'Olá, gostaria de fazer um pedido para Pascoal Distribuidora:',
    ...items.map((item) => ` ${item.name} x${item.quantity} = AOA ${(item.price * item.quantity).toFixed(2)}`),
    '',
    `Total: AOA ${total.toFixed(2)}`,
  ]

  const message = encodeURIComponent(lines.join('\n'))
  return `https://wa.me/${PHONE}?text=${message}`
}
