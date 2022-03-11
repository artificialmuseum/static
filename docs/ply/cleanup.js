import fs from '@magic/fs'

const main = async () => {
  const contents = await fs.readFile('./xarshyperobject.ply', 'utf8')

  const [ head, rest ] = contents.split('end_header\n')

  const lines = rest.split('\n').map(line => {
    const r = line.split(' ').map(r => {
      if (!r) {
        return
      }

      return parseFloat(r).toFixed(3) / 1.0
    })

    return r.join(' ')
  }).filter(a => a)

  const finalContent = [ head, lines.join('\n') ].join('end_header\n')

  await fs.writeFile('xrs.ply', finalContent)
}

main()
