
import { FaLink } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaRegCheckSquare } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { HiSpeakerphone } from "react-icons/hi";
const features = [
  {
    name: ' Increased transparency ' ,
    description:
      'Cities can interconnect using blockchain vertical services, such as mobility, energy or security, through a single open, accessible, transversal system that is able to exchange data with their inhabitants in real time',
    icon: FaLink,
  },
  {
    name: ' Integrity over information',
    description:
      'Blockchain makes it possible for government departments and the public to interact digitally, without the need for intermediaries. This would speed up, for example, bureaucratic procedures at registries, town halls, etc..',
    icon: FaEyeSlash,
  },
  {
    name: 'Direct communication',
    description:
      'Blockchain makes it possible for government departments and the public to interact digitally, without the need for intermediaries. This would speed up, for example, bureaucratic procedures at registries, town halls, etc.',
    icon: HiSpeakerphone,
  },
  {
    name: 'To digitalize ongoing mechanisms',
    description:
      'With this technology it is possible to upgrade the ongoing mechanisms by digitalizing the traditional system , which will make it easily accessible.',
    icon: FaShieldAlt,
  },
  {
    name: '  Efficient management ' ,
    description:
      'Blockchain allows both the public and city officials to know the origin and destination of each resource. In addition, the latter can find out how city services are being used without compromising people privacy.',
    icon: MdManageAccounts,
  },
  {
    name: ' Verify genuineness of ownership. ' ,
    description:
      'Blockchain Provides an easy way to verify the  genuineness of ownership using Assymetric key cryptography where only owner who has original key can see its data',
    icon: FaRegCheckSquare,
  },
]

export default function Feature() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Features you need to Know
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 text-justify">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
