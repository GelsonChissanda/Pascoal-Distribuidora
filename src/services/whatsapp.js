const PHONE = '244999999999'

export function createWhatsAppLink(items, total) {
  const lines = [
    'Olá, gostaria de fazer um pedido para Pascoal Distribuidora:',
    ...items.map((item) => `- ${item.name} x${item.quantity} = R$ ${(item.price * item.quantity).toFixed(2)}`),
    '',
    `Total: R$ ${total.toFixed(2)}`,
  ]

  const message = encodeURIComponent(lines.join('\n'))
  return `https://wa.me/${PHONE}?text=${message}`
}
